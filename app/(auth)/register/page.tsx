"use client";

export default function RegisterPage() {

    async function handleRegister() {
        window.location.href = "/login";
    }
  return (
    <main>
      <h1>Register</h1>

      <button onClick={handleRegister}>
        Register
      </button>
    </main>
  );
}