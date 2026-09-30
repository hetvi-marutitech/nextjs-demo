"use client";
import { useState } from "react";

export default function StudentCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Selected students: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Select Student
      </button>
    </div>
  );
}