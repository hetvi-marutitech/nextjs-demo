"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(result);

    if (result?.ok) {
      window.location.href = "/students";
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <main>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h1>

        <form onSubmit={handleLogin}>
          <div>
            <label>Email </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />

          <div>
            <label>Password </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />

          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/students" })}
            style={{ marginLeft: "10px" }}
          >
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
}
