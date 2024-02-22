import { create } from "zustand"
import { schoolCourses, schoolUsers } from "../const"

export type SchoolUser = {
  id?: string
  email: string
  password: string
  role: "admin" | "teacher" | "student"
  name: string
  courses?: Course[]
}

export type Course = {
  id?: string
  name: string
  code: string
  description: string
  time: string
}

type SchoolStore = {
  isLogged: boolean
  setIsLogged: (data: boolean) => void
  user?: SchoolUser | null
  setUser: (user: SchoolUser) => void
  createUser: (user: SchoolUser) => void
  users: SchoolUser[]
  courses: Course[]
}

export const useSchoolStore = create<SchoolStore>()((set) => ({
  isLogged: false,
  setIsLogged: (data) => set((state) => ({ ...state, isLogged: data })),

  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
  createUser: (user) =>
    set((state) => ({ ...state, users: [...state.users, user] })),

  users: schoolUsers,

  courses: schoolCourses,
}))
