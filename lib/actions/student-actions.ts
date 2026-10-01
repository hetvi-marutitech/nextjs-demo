"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type StudentFromState = {
  success: boolean;
  message: string;
};

export async function createStudent(
  previousState: StudentFromState,
  formData: FormData,
): Promise<StudentFromState> {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const age = formData.get("age");

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof age !== "string"
  ) {
    return {
      success: false,
      message: "Invalid form data",
    };
  }

  if (email.length < 5 || !email.includes("@")) {
    return {
      success: false,
      message: "Invalid email address",
    };
  }

  if (Number(age) < 18) {
    return {
      success: false,
      message: "Student must be at least 18 years old",
    };
  }

  console.log({
    firstName,
    lastName,
    email,
    age,
  });

  //revalidatePath("/students");
  redirect("/students");
  //   return {
  //     success: true,
  //     message: "Student created successfully",
  //   };
}
