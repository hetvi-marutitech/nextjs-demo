import type { Student } from "@/types/student";
export type CreateStudentRequest = Omit<Student, "id">;