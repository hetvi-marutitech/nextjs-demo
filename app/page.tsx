import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const session = await auth();

  console.log("Session in Home page:", session);
  return (
    <main>
      <h1>Students</h1>

      <h2>Session Information</h2>

      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>

        <p>id: {session?.user?.id}</p>
        <p>role: {session?.user?.role}</p>

      <LogoutButton />
    </main>
  );
}