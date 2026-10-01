"use client";
import { login } from "@/lib/login";

export default function LoginPage() {
  async function handleLogin() {
    await login();
  }

  return (
    <main>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </main>
  );
}