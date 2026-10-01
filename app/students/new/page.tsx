"use client";
import {
  createStudent,
  type StudentFromState,
} from "@/lib/actions/student-actions";
import { useActionState } from "react";

const initialState: StudentFromState = {
  success: false,
  message: "",
};

export default function NewStudentPage() {
  const [state, formAction] = useActionState(createStudent, initialState);
  return (
    <main>
      <h1>Create a New Student</h1>

      <form action={formAction}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" required />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        <br />

        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" required />
        <br />

        <button type="submit">Create Student</button>
      </form>

       {state.message && (
        <p>{state.message}</p>
      )}
    </main>
  );
}
