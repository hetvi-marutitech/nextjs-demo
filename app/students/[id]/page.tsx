import { notFound } from "next/navigation";
import { getStudentById } from "@/lib/students";

export default async function StudentDetailsPage({params}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const student = await getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <main>
      <h1>Student Details</h1>

      <h2>
        {student.firstName} {student.lastName}
      </h2>

      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
    </main>
  );
}