"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ClientSession from "@/components/ClientSession";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    fetch("/api/companies")
      .then((res) => res.json())
      .then(data => setCompanies(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to fetch Companies", err));
  }, []);

  useEffect(() => {
    fetch("/api/sites")
      .then((res) => res.json())
      .then(data => setSites(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to fetch Sites", err));
  }, []);

  useEffect(() => {
    fetch("/api/suppliers")
      .then((res) => res.json())
      .then(data => setSuppliers(Array.isArray(data) ? data : []))
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
      <div className="container mx-auto h-screen overflow-hidden">
        <Header />

        <div className="flex h-full overflow-auto items-start">
          <div className="w-2/3 px-6 py-4 flex">
            <div className="p-4 shadow-md rounded-lg bg-gray-100 m-2 flex text-center items-center justify-between w-1/3 h-auto">
              <h2 className="text-orange-600 text-xl font-semibold">Companies</h2>
              <p className="text-green-600 font-extrabold text-lg">{companies.length}</p>
            </div>

            <div className="p-4 shadow-md rounded-lg bg-gray-100 m-2 flex text-center items-center justify-between w-1/3 h-auto">
              <h2 className="text-orange-600 text-xl font-semibold">Company Sites</h2>
              <p className="text-green-600 font-extrabold text-lg">{sites.length}</p>
            </div>

            <div className="p-4 shadow-md rounded-lg bg-gray-100 m-2 flex text-center items-center justify-between w-1/3 h-auto">
              <h2 className="text-orange-600 text-xl font-semibold">Suppliers</h2>
              <p className="text-green-600 font-extrabold text-lg">{suppliers.length}</p>
            </div>
          </div>

          <div className="w-1/3 border-l-2 py-4">
            <div className="p-4 shadow-md rounded-lg bg-gray-200 m-2 flex text-center items-center justify-between">
              <h3 className="text-lg font-bold">Register a new company</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-gray-500 text-base text-white px-4 py-2 rounded-full hover:bg-gray-400">
                    New Company
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogTitle>New Company Posting</DialogTitle>
                  <CompanyForm />
                </DialogContent>
              </Dialog>
            </div>

            <div className="p-4 shadow-md rounded-lg bg-gray-200 m-2 flex text-center items-center justify-between">
              <h3 className="text-lg font-bold">Register a new site</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-gray-500 text-base text-white px-4 py-2 rounded-full hover:bg-gray-400">
                    New Site
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogTitle>New Company Site Posting</DialogTitle>
                  <AddSiteForm companies={companies} />
                </DialogContent>
              </Dialog>
            </div>

            <div className="p-4 shadow-md rounded-lg bg-gray-200 m-2 flex text-center items-center justify-between">
              <h3 className="text-lg font-bold">Register a new supplier</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-gray-500 text-base text-white px-4 py-2 rounded-full hover:bg-gray-400">
                    New Supplier
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogTitle>New Supplier Posting</DialogTitle>
                  <AddSupplierForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </ClientSession>
  );
}
