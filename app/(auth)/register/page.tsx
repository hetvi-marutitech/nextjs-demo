"use client";
import { useState } from "react";

export default function RegisterPage() {
  async function handleRegister() {
    if (password !== confirmPassword) {
      alert("password and confirm password do not match");
      return;
    }
    window.location.href = "/login";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Register</h1>

        <form onSubmit={handleRegister}>
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

          <div>
            <label>Confirm Password </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <br />

          <button type="submit">Register</button>
        </form>
      </div>
    </main>
  );
}
