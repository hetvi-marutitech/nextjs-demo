import { getStudentById } from "@/lib/students";
import { NextResponse } from "next/server";

export async function GET(request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const student = await getStudentById(id);

  if (!student) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(student);
}