import { NextResponse } from "next/server";

interface Lead {
  id: string;
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  domain: string;
  numberOfCandidates: number;
  deliveryMode: string;
  location: string;
  createdAt: string;
}

// In-memory store (resets on server restart — ideal for Vercel demo)
const leads: Lead[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, workEmail, phone, companyName, domain, numberOfCandidates, deliveryMode, location } = body;

    // Basic validation
    if (!fullName || !workEmail || !phone || !companyName || !domain || !numberOfCandidates || !deliveryMode) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fullName,
      workEmail,
      phone,
      companyName,
      domain,
      numberOfCandidates: Number(numberOfCandidates),
      deliveryMode,
      location: location || "",
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("[Accredian Enterprise] New lead captured:", JSON.stringify(lead, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. Our team will reach out within 1 business day.",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Accredian Enterprise] Lead capture error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: leads.length,
    leads,
  });
}
