import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { orderId, phone } = await request.json();

    if (!orderId || !phone) {
      return NextResponse.json({ error: "Missing tracking details" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "src/data/orders.json");
    let orders = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      orders = JSON.parse(fileContent);
    } catch {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const order = orders.find(
      (o: any) => 
        o.orderId.toLowerCase() === orderId.toLowerCase() && 
        o.customer.phone.replace(/\D/g, "") === phone.replace(/\D/g, "")
    );

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Return only necessary info for privacy
    return NextResponse.json({
      orderId: order.orderId,
      status: order.verificationStatus === "VERIFIED" ? "Confirmed & Paid" : "Pending Confirmation",
      customerName: order.customer.fullName,
      total: order.total,
      itemsCount: order.items.length,
      timestamp: order.timestamp,
      paymentMethod: order.paymentMethod
    });
  } catch (error) {
    return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
  }
}
