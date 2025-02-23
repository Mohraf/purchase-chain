"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ClientSession from "@/components/ClientSession";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CompanyForm } from "@/components/Company/AddCompanyForm";
import AddSiteForm from "@/components/Site/AddSiteForm";
import AddSupplierForm from "@/components/Supplier/AddSupplierForm";
import Header from "@/components/Header/Header";
import { Site, Supplier } from "@/types/models";

export interface Company {
  id: number;
  name: string;
}

export default function Dashboard() {
  const { data: session } = useSession();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    fetch("/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to fetch Companies", err));
  }, []);

  useEffect(() => {
    fetch("/api/sites")
      .then((res) => res.json())
      .then((data) => setSites(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to fetch Sites", err));
  }, []);

  useEffect(() => {
    fetch("/api/suppliers")
      .then((res) => res.json())
      .then((data) => setSuppliers(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to fetch Suppliers", err));
  }, []);

  if (!companies) return <p>Loading companies...</p>;
  if (!sites) return <p>Loading sites...</p>;
  if (!suppliers) return <p>Loading suppliers...</p>;

  // Ensure loading state is handled properly
  if (!isClient) return <div>Loading...</div>; // Show loading state until client is ready

  if (!session) return null; // Ensure user is authenticated

  return (
    <ClientSession>
      <div className="container mx-auto h-full">
        <Header />

        <div className="flex px-4 items-start flex-col">
          <div className="w-full flex md:flex-row flex-col">
            <Dialog>
              <DialogTrigger asChild className="m-1">
                <button className="bg-gray-300 text-base text-black px-4 py-2 rounded-full hover:bg-gray-500 shadow-md">
                  Register a new company
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogTitle>New Company Posting</DialogTitle>
                <CompanyForm />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild className="m-1">
                <button className="bg-gray-300 text-base text-black px-4 py-2 rounded-full hover:bg-gray-500 shadow-md">
                  Register a new site
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogTitle>New Company Site Posting</DialogTitle>
                <AddSiteForm companies={companies} />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild className="m-1">
                <button className="bg-gray-300 text-base text-black px-4 py-2 rounded-full hover:bg-gray-500 shadow-md">
                  Register a new supplier
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogTitle>New Supplier Posting</DialogTitle>
                <AddSupplierForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="w-full px-2 py-4 flex md:flex-row md:space-x-6 flex-col">
            <div className="p-4 shadow-md rounded-lg bg-gray-100 mb-2 flex text-center items-center justify-between md:w-1/3 w-full h-auto">
              <h2 className="text-orange-600 text-xl font-semibold">
                Companies
              </h2>
              <p className="text-green-600 font-extrabold text-lg">
                {companies.length}
              </p>
            </div>

            <div className="p-4 shadow-md rounded-lg bg-gray-100 mb-2 flex text-center items-center justify-between md:w-1/3 w-full h-auto">
              <h2 className="text-orange-600 text-xl font-semibold">
                Company Sites
              </h2>
              <p className="text-green-600 font-extrabold text-lg">
                {sites.length}
              </p>
            </div>

            <div className="p-4 shadow-md rounded-lg bg-gray-100 mb-2 flex text-center items-center justify-between md:w-1/3 w-full h-auto">
              <h2 className="text-orange-600 text-xl font-semibold">
                Suppliers
              </h2>
              <p className="text-green-600 font-extrabold text-lg">
                {suppliers.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ClientSession>
  );
}
