import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <hr />
      <section>{children}</section>
    </div>
  );
}   