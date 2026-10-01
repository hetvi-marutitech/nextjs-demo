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
      
      <div style={{ border: "1px solid #ccc", padding: "10px"}}>
        <p>
          {student.firstName} {student.lastName}
        </p>

      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      </div>
    </main>
  );
}