import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {prisma} from "@/lib/prisma";

export async function GET() {
    const session = await auth();
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        if (session.user.role === "ADMIN" || session.user.role === "APPROVER") {
            const lpos = await prisma.lpo.findMany({
                where: { finalApproverId: null, secondApproverId: { not: null }, firstApproverId:  { not: null }, rejected: "NO" },
                include: {
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
                where: { createdById: parseInt(session.user.id), finalApproverId: null, secondApproverId: { not: null }, firstApproverId:  { not: null }, rejected: "NO" }, // Fetching LPOs created by the logged-in user
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

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch LPOs" }, { status: 500 });
    }
}
