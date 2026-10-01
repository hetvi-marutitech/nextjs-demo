import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Auth Page</h1>

        <nav>
          <Link href="/login">Login</Link>
          {" | "}
          <Link href="/register">Register</Link>
        </nav>
      </header>

      <hr />

      <section>{children}</section>
    </div>
  );
}   