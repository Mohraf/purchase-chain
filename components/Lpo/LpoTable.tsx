"use client";
import { useState, useEffect } from "react";
import { Lpo, Site, Supplier } from "@/types/models";
import LpoDetails from "./LpoDetails";

// Update the function signature to accept props
const LpoTable = ({
  lposprops,
  suppliers,
  sites,
}: {
  lposprops: Lpo[];
  suppliers: Supplier[];
  sites: Site[];
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSupplierId, setFilterSupplierId] = useState<number | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [selectedLpo, setSelectedLpo] = useState<Lpo | null>(null);
  const [lpos, setLpos] = useState<Lpo[]>([]);
  const [filteredLpos, setFilteredLpos] = useState<Lpo[]>([]);

  useEffect(() => {
    setLpos(lposprops);
    setFilteredLpos(lposprops);
  }, [lposprops]);

  useEffect(() => {
    setLoading(true);
    console.log(lpos);
    const data = lpos.filter(
      (lpo) =>
        (lpo.lpoNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lpo.supplyItems?.some((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )) && // Added filtering for supply items
        (filterSupplierId ? lpo.supplier.id === filterSupplierId : true) // Check if filterSupplierId is set
    );

    setFilteredLpos(data); // Update filtered LPOs
    setLoading(false);
  }, [searchTerm, filterSupplierId, lpos]);

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
    <>
      <div className="flex justify-between space-x-4 p-2 bg-gray-200">
        <input
          type="text"
          placeholder="Search by Lpo number or supply item"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full border-collapse rounded-sm placeholder:text-gray-400"
        />

        <select
          value={filterSupplierId}
          onChange={(e) => setFilterSupplierId(Number(e.target.value))}
          className="w-full p-2 border-collapse rounded-sm"
        >
          <option className="text-gray-400" value="">All suppliers</option>
          {/* Changed from "All Cities" to "All Suppliers" */}
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id.toString()}>
              {supplier.name}
            </option>
          ))}
        </select>
      </div>

      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Select</th>
            <th className="p-3 border">LPO Number</th>
            <th className="p-3 border">PR Number</th>
            <th className="p-3 border">Supplier</th>
            <th className="p-3 border">Subtotal</th>
            <th className="p-3 border">VAT</th>
            <th className="p-3 border">Total</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Add logic to render LPOs based on search and filter criteria */}

          {loading ? (
            <tr>
              <td colSpan={8} className="p-4 text-center text-gray-500">
                Loading LPOs...
              </td>
            </tr>
          ) : filteredLpos.length === 0 ? (
            <tr>
              <td colSpan={8} className="p-4 text-center text-gray-500">
                No LPOs available.
              </td>
            </tr>
          ) : (
            filteredLpos.map((lpo) => (
              <tr
                key={lpo.id}
                className={`border-t cursor-pointer hover:bg-gray-100 ${
                  selectedLpo?.id === lpo.id ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelectedLpo(lpo)}
              >
                <td className="p-3 border text-center">
                  <input
                    type="radio"
                    name="selectedLpo"
                    checked={selectedLpo?.id === lpo.id}
                    onChange={() => setSelectedLpo(lpo)}
                    className="text-slate-900 appearance-none cursor-pointer peer h-3 w-3 rounded-full border border-slate-500 checked:border-slate-900 transition-all"
                  />
                </td>
                <td className="p-3 border">{lpo.lpoNumber}</td>
                <td className="p-3 border">{lpo.prNumber}</td>
                <td className="p-3 border">{lpo.supplier.name}</td>
                <td className="p-3 border">{lpo.subTotal.toFixed(2)}</td>
                <td className="p-3 border">{lpo.vatRate}%</td>
                <td className="p-3 border">{lpo.total.toFixed(2)}</td>
                <td className="p-3 border">
                  {new Date(lpo.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 border">{getLpoStatus(lpo)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {selectedLpo && (
          <LpoDetails 
            lpo={selectedLpo} 
            suppliers={suppliers}
            sites={sites}
            onClose={() => setSelectedLpo(null)} 
          />
        )}
    </>
  );
};

export default LpoTable;
