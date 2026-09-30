import { getStudents } from "@/lib/students";
import { CreateStudentRequest } from "@/types/createStudent";
import { NextResponse } from "next/server";

export async function GET() {
  const students = await getStudents();

  return NextResponse.json(students);
}

export async function POST(request: Request) {
  const body: CreateStudentRequest = await request.json();

  return NextResponse.json(
    {
      message: "Student created",
      student: body,
    },
    {
      status: 201,
    }
  );
}