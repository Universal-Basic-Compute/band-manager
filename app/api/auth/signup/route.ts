import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";
import bcrypt from "bcryptjs";

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

const usersTable = base('USERS');

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUsers = await usersTable.select({
      filterByFormula: `{email} = '${email}'`
    }).firstPage();

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in Airtable
    const records = await usersTable.create([
      {
        fields: {
          name,
          email,
          password: hashedPassword,
          provider: "credentials",
          createdAt: new Date().toISOString(),
        }
      }
    ]);

    // Return success without exposing sensitive data
    return NextResponse.json(
      { 
        message: "User created successfully",
        userId: records[0].id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "An error occurred during signup" },
      { status: 500 }
    );
  }
}
