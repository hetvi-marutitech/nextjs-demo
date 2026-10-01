import Link from "next/link";

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <hr/>
      <section>{children}</section>
    </div>
  );
}