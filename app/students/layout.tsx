import Link from "next/link";

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Student Management</h1>

        <nav>
          <Link href="/students">Students</Link>
          {" | "}
          <Link href="/students/courses">Courses</Link>
        </nav>
      </header>

      <hr />

      <section>{children}</section>
    </div>
  );
}