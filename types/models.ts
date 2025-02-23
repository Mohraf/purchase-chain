export type SupplyItem = {
    id: number;
    name: string;
    quantity: number;
    unitPrice: number;
    unit: string; // Ensure unit is included
}

export type User = {
    id: number;
    firstName: string;
    lastName: string;
}

export type Lpo = {
    id: number;
    lpoNumber: string;
    prNumber: string;
    supplier: { id: number; name: string };
    subTotal: number;
    vatRate: number;
    total: number;
    paymentTerms: string;
    deliveryTerms: string;
    remarks: string;
    createdAt: string;
    firstApproverId: number;
    firstApprover: User;
    secondApproverId: number;
    secondApprover: User;
    finalApproverId: number;
    finalApprover: User;
    rejected: string;
    site: { id: number; name: string };
    supplyItems: SupplyItem[];
    createdBy: User;
}

export type Site = {
    id: number;
    name: string;
}

export type Company = {
    id: number;
    name: string;
}

export type Supplier = {
    id: number;
    name: string;
}