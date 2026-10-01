import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

export const metadata: Metadata = {
  title: "Student Management Dashboard",
  description: "Student Management Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <h1>Student Management Dashboard</h1>

            <nav>
              {session ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <Link href="/">Home</Link>
                    {" | "}
                    <Link href="/students">Students</Link>
                    {" | "}
                    <Link href="/students/courses">Courses</Link>
                  </div>

                  <div>
                    <LogoutButton />
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/login">Login</Link>
                  {" | "}
                  <Link href="/register">Register</Link>
                </>
              )}
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
