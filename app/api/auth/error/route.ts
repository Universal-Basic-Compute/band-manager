import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const error = searchParams.get("error");
  
  // Redirect to login page with error parameter
  return NextResponse.redirect(new URL(`/login?error=${error || "unknown"}`, req.url));
}
