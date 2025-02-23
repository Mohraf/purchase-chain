"use client";
import { useState, useEffect } from "react";
import { LpoForm } from "@/components/LpoPostingForm/LpoForm";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LpoDetails from "@/components/Lpo/LpoDetails";
import Header from "@/components/Header/Header";
import { Lpo, Site, Supplier } from "@/types/models";
import LpoTable from "@/components/Lpo/LpoTable";

export default function PostedLposPage() {
  const [lpos, setLpos] = useState<Lpo[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [selectedLpo, setSelectedLpo] = useState<Lpo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/lpos")
        .then((res) => res.json())
        .then((data) => setLpos(Array.isArray(data) ? data : [])), // Ensure data is an array
      fetch("/api/sites")
        .then((res) => res.json())
        .then((data) => setSites(Array.isArray(data) ? data : [])),
      fetch("/api/suppliers")
        .then((res) => res.json())
        .then((data) => setSuppliers(Array.isArray(data) ? data : [])),
    ])
      .catch((err) => console.error("Failed to fetch data", err))
      .finally(() => setLoading(false));
  }, []);

  const getLpoStatus = (lpo: Lpo) => {
    if (lpo.rejected === "YES") {
      return "Rejected";
    }
    if (lpo.finalApproverId) {
      return "Fully Approved";
    }
    if (lpo.secondApproverId) {
      return "Second Approved";
    }
    if (lpo.firstApproverId) {
      return "First Approved";
    }
    return "Pending";
  };

  return (
    <div className="container mx-auto h-screen">
      <Header />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Posted LPOs</h1>
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                New LPO
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogTitle>New LPO Posting</DialogTitle>
              <LpoForm sites={sites} suppliers={suppliers} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <LpoTable lposprops={lpos} suppliers={suppliers} sites={sites} />
        </div>
        {selectedLpo && (
          <LpoDetails
            lpo={selectedLpo}
            suppliers={suppliers}
            sites={sites}
            onClose={() => setSelectedLpo(null)}
          />
        )}
      </div>
    </div>
  );
}
