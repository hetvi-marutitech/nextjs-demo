import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const session = await auth();

  console.log("Session in Home page:", session);
  return (
    <main>
      {session ? (
        <p>Welcome, {session.user?.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}

      {/* <p>id: {session?.user?.id}</p>
      <p>role: {session?.user?.role}</p>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre> */}


      {/* <LogoutButton /> */}
    </main>
  );
}