import { create } from "zustand"

export type User = {
  name: string
  first_name: string
  last_name: string
  email: string
  address: {
    street_address: string
    street_name: string
    city: string
    state: string
    country: string
    zip_code: string
  }
  phoneNumber: string
}

type AuthStore = {
  users: User[]
  setUsers: (users: User[]) => void
  getUsers: (page: number, perPage: number) => User[]
}

export const useCommonStore = create<AuthStore>()((set, get) => ({
  users: [],
  setUsers: (users) => set((state) => ({ ...state, users })),
  getUsers: (page, perPage) => get().users,
}))
