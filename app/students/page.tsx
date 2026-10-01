import StudentCounter from "./StudentCounter";
import { getStudents } from "@/lib/students";
import Link from "next/link";

export default async function StudentsPage() {
  const students = await getStudents();
  return (
    <main>
      {students.map((student) => (
        <div key={student.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <p> Name: {student.firstName} {student.lastName}</p>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <Link href={`/students/${student.id}`}>View Details</Link>
        </div>
      ))}

      <StudentCounter />
    </main>
  );
}
