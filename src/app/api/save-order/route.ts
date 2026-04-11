import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { orderId, razorpayPaymentId, razorpayOrderId, razorpaySignature, paymentMethod } = data;

    // 1. SECURITY: Razorpay Signature Verification
    if (paymentMethod === "ONLINE") {
      if (!razorpayPaymentId || !razorpaySignature || !razorpayOrderId) {
        return NextResponse.json({ error: "Missing payment confirmation details" }, { status: 400 });
      }

      const secret = process.env.RAZORPAY_KEY_SECRET || "placeholder_secret";
      const body = razorpayOrderId + "|" + razorpayPaymentId;
      const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(body.toString())
        .digest("hex");

      if (expectedSignature !== razorpaySignature) {
        return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
      }
    }

    const filePath = path.join(process.cwd(), "src/data/orders.json");
    
    // 2. STABILITY: Safer File Handling
    let orders = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      orders = JSON.parse(fileContent);
    } catch {
      orders = [];
    }
    
    // Add new order with finalized status
    orders.push({
      ...data,
      verificationStatus: paymentMethod === "ONLINE" ? "VERIFIED" : "COD_PENDING",
      createdAt: new Date().toISOString()
    });
    
    await fs.writeFile(filePath, JSON.stringify(orders, null, 2), "utf-8");
    
    return NextResponse.json({ success: true, orderId });
  } catch (error) {
    console.error("Critical order save error:", error);
    return NextResponse.json({ error: "Failed to finalize order" }, { status: 500 });
  }
}
