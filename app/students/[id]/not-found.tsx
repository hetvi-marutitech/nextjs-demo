import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Student Not Found</h1>

      <p>
        We couldn't find the student you're looking for.
      </p>

      <Link href="/students">
        Back to Students
      </Link>
    </main>
  );
}