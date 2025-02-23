import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {prisma} from "@/lib/prisma";
import { SupplyItem } from "@/types/models";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) return NextResponse.json(
      { error: "Unauthorized" }, 
      { status: 401 }
    );

    const rawData = await req.json();
    
    // Validate required fields
    const requiredFields = [
      'siteId', 'supplierId', 'prNumber',
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

    // Fetch the latest Lpo
    const latestLpo = await prisma.lpo.findFirst({
      orderBy: { id: 'desc' },
      select: { lpoNumber: true }
  });

  // Determine the next lpoNumber
  const nextLpoNumber = latestLpo ? 
      String(parseInt(latestLpo.lpoNumber) + 1).padStart(3, '0') : 
      '001';

    const lpo = await prisma.lpo.create({
      data: {
        ...rawData,
        siteId: Number(rawData.siteId),
        supplierId: Number(rawData.supplierId),
        lpoNumber: nextLpoNumber,
        prNumber: rawData.prNumber,
        paymentTerms: rawData.paymentTerms,
        deliveryTerms: rawData.deliveryTerms,
        vatRate: Number(rawData.vatRate),
        subTotal,
        total,
        createdById: parseInt(session.user.id),
        supplyItems: {
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
    // return NextResponse.json();
  }
}

// Add similar routes for GET, PUT, DELETE
export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    if (session.user.role === "ADMIN" || session.user.role === "APPROVER") {
      const lpos = await prisma.lpo.findMany({
        include : {
          site: true, // Include site data
          supplier: true,
          supplyItems: true,
          finalApprover: true,
          secondApprover: true,
          firstApprover: true,
        }
      });
      return NextResponse.json(lpos);
    } else {
      // fetching LPOs based on the logged-in user
      const lpos = await prisma.lpo.findMany({
        where: { createdById: parseInt(session.user.id) }, // Fetching LPOs created by the logged-in user
        include: {
          site: true, // Include site data
          supplier: true, // Include supplier data
          supplyItems: true,
          finalApprover: true,
          secondApprover: true,
          firstApprover: true,
        },
      });
      return NextResponse.json(lpos);
    }

  } catch (error: unknown) {
    console.error(error)
    return NextResponse.json({ error: "Failed to fetch LPOs" }, { status: 500 });
  }
}
