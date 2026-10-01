import type { Student } from "@/types/student";

const apiUrl = process.env.API_URL;
export async function getStudents() : Promise<Student[]> {
    const response = await fetch(`${apiUrl}/users`, {
        // next: {
        //     revalidate: 10,
        // }
        cache: "no-store"
    });

    if(!response.ok){
        throw new Error("Failed to fetch students");
    }

    const students = await response.json();

    return students.users;
}

export async function getStudentById(id: string): Promise<Student | null> {
  const response = await fetch(`${apiUrl}/users/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch student");
  }

  return response.json();
}