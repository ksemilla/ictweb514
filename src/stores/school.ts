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
  setUser: (user: SchoolUser | null | undefined) => void
  createUser: (user: SchoolUser) => void

  updateUser: (user: SchoolUser) => void
  deleteUser: (user: SchoolUser) => void

  users: SchoolUser[]
  courses: Course[]
  createCourse: (course: Course) => void
  updateCourse: (course: Course) => void
  deleteCourse: (user: Course) => void
}

export const useSchoolStore = create<SchoolStore>()((set) => ({
  isLogged: false,
  setIsLogged: (data) => set((state) => ({ ...state, isLogged: data })),

  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
  createUser: (user) =>
    set((state) => ({ ...state, users: [...state.users, user] })),
  updateUser: (user) =>
    set((state) => ({
      ...state,
      users: state.users.map((obj) => {
        if (obj.id === user.id) {
          return user
        } else return obj
      }),
    })),
  deleteUser: (user) =>
    set((state) => ({
      ...state,
      users: state.users.filter((obj) => obj.id !== user.id),
    })),

  users: schoolUsers,

  courses: schoolCourses,
  createCourse: (course) =>
    set((state) => ({ ...state, courses: [...state.courses, course] })),
  updateCourse: (course) =>
    set((state) => ({
      ...state,
      courses: state.courses.map((obj) => {
        if (obj.id === course.id) {
          return course
        } else return obj
      }),
    })),
  deleteCourse: (course) =>
    set((state) => ({
      ...state,
      courses: state.courses.filter((obj) => obj.id !== course.id),
    })),
}))
