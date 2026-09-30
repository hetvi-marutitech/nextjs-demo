import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Management Dashboard",
  description: "Student Management Dashboard",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Student Management Dashboard</h1>

          <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/students">Students</Link>
            {" | "}
            <Link href="/students/courses">Courses</Link>
          </nav>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}