/**
 * Generates a unique order ID for Gokul Namkeen.
 * Format: GOKUL-YYYYMMDD-XXXX where XXXX is a random string.
 */
export function generateOrderId(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  
  const dateStr = `${year}${month}${day}`;
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  
  return `GOKUL-${dateStr}-${randomStr}`;
}
