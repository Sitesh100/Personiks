import { NextResponse } from "next/server";
import { z } from "zod";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { hashPassword } from "@/lib/utils";
import { registerSchema } from "@/schema/userSchema";
import { Usertype } from "@/types/User";

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    let body;
    try {
      body = await request.json();
      registerSchema.parse(body);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { error: "Validation failed", details: validationError.errors },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { fullName, email, phone, password } = body;

    // Connect to database
    await connectDB();

    // Check for existing user
    const existingUser = await User.findOne({ email }).lean<Usertype>();
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || null,
      password: hashedPassword,
      createdAt: new Date(),
    });

    // Return success response
    return NextResponse.json(
      {
        message: "User registered successfully",
        userId: user._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
