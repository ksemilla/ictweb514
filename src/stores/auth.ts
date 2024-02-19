import { create } from "zustand"

export type User = {
  email: string
  password: string
}

type AuthStore = {
  isLogged: boolean
  setIsLogged: (data: boolean) => void
  user?: User | null
  users: User[]
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isLogged: false,
  setIsLogged: (data) => set((state) => ({ ...state, isLogged: data })),

  user: null,
  users: [
    {
      email: "johndoe@test.com",
      password: "test",
    },
    {
      email: "janedoe@test.com",
      password: "test",
    },
    {
      email: "test@test.com",
      password: "test",
    },
  ],
  setUser: (user) => set((state) => ({ ...state, user })),
}))
