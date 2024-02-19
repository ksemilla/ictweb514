import { create } from "zustand"

export type User = {
  id?: number | string
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
  phone_number: string
}

type AuthStore = {
  users: User[]
  setUsers: (users: User[]) => void
  getUsers: (page: number) => User[]
  addUser: (user: User) => void
  getUser: (id: string | number) => User | undefined
}

export const useCommonStore = create<AuthStore>()((set, get) => ({
  users: [],
  setUsers: (users) => set((state) => ({ ...state, users })),
  getUsers: (page) => get().users.slice((page - 1) * 15, page * 15),
  addUser: (user) =>
    set((state) => ({ ...state, users: [user, ...state.users] })),
  getUser: (id) => get().users.find((obj) => obj.id === id),
}))
