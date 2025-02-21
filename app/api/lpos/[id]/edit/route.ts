import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { SupplyItem } from "@/types/models";

export async function PATCH(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) return NextResponse.json(
            { error: "Unauthorized" }, 
            { status: 401 }
        );

        const lpoId = parseInt(req.nextUrl.pathname.split('/')[3]);
        const rawData = await req.json();
        
        // Validate required fields
        const requiredFields = [
            'siteId', 'supplierId', 'lpoNumber', 'prNumber',
            'paymentTerms', 'deliveryTerms', 'vatRate', 'supplyItems', 'remarks'
        ];
        
        const missingFields = requiredFields.filter(field => !rawData[field]);
        if (missingFields.length > 0) {
            return NextResponse.json(
                { error: `Missing required fields: ${missingFields.join(', ')}` },
                { status: 400 }
            );
        }

        // Calculate financial values
        const subTotal = rawData.supplyItems.reduce(
            (acc: number, item: SupplyItem) => acc + (item.quantity * item.unitPrice),
            0
        );
        
        const total = subTotal * (1 + (rawData.vatRate / 100));

        const lpo = await prisma.lpo.update({
            where: { id: lpoId },
            data: {
                ...rawData,
                siteId: Number(rawData.siteId),
                supplierId: Number(rawData.supplierId),
                lpoNumber: rawData.lpoNumber,
                prNumber: rawData.prNumber,
                paymentTerms: rawData.paymentTerms,
                deliveryTerms: rawData.deliveryTerms,
                vatRate: Number(rawData.vatRate),
                subTotal,
                total,
                createdById: parseInt(session.user.id),
                supplyItems: {
                    deleteMany: {}, // Delete existing supply items
                    create: rawData.supplyItems.map((item: SupplyItem) => ({
                        name: item.name,
                        quantity: Number(item.quantity),
                        unit: item.unit,
                        unitPrice: Number(item.unitPrice)
                    }))
                },
                remarks: rawData.remarks
            },
            include: { supplyItems: true }
        });

        return NextResponse.json(lpo);

    } catch (error: unknown) {
        console.error("Database error:", error);

        // Create a safe error response
        const errorResponse = {
            error: "Operation failed",
            message: (error as Error).message || "An unknown error occurred", // Fallback to a default message
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
}