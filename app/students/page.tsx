import StudentCounter from "./StudentCounter";
import { getStudents } from "@/lib/students";
import Link from "next/link";

export default async function StudentsPage() {
  const students = await getStudents();
  return (
    <main>
      <h1>Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>
            Name: {student.firstName} {student.lastName}
          </h2>

          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <Link href={`/students/${student.id}`}>
            View Details
          </Link>
        </div>
      ))}

      <StudentCounter />
    </main>
  );
}
