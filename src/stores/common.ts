import { create } from "zustand"
import { items } from "../const"

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

export type Item = {
  id?: string
  name: string
  description?: string
  price: number
  imageUrl: string
}

export interface OrderItem extends Item {
  quantity: number
}

type AuthStore = {
  users: User[]
  setUsers: (users: User[]) => void
  getUsers: (page: number) => User[]
  addUser: (user: User) => void
  getUser: (id: string | number) => User | undefined
  updateUser: (user: User) => void

  items: Item[]
  orderItems: OrderItem[]
  addOrderItem: (orderItem: OrderItem) => void
  removeOrderItem: (id: string) => void
  addItem: (item: Item) => void
  getItem: (id: string) => Item | undefined
  updateItem: (item: Item) => void
}

export const useCommonStore = create<AuthStore>()((set, get) => ({
  users: [],
  setUsers: (users) => set((state) => ({ ...state, users })),
  getUsers: (page) => get().users.slice((page - 1) * 15, page * 15),
  addUser: (user) =>
    set((state) => ({ ...state, users: [user, ...state.users] })),
  getUser: (id) => get().users.find((obj) => obj.id === id),
  updateUser: (user) =>
    set((state) => ({
      ...state,
      users: state.users.map((u) => {
        if (u.id === user.id) {
          return user
        } else return u
      }),
    })),

  items: items,
  orderItems: [],
  addOrderItem: (orderitem) =>
    set((state) => ({
      ...state,
      orderItems: [...state.orderItems, orderitem],
    })),
  removeOrderItem: (id) =>
    set((state) => ({
      ...state,
      orderItems: state.orderItems.filter((obj) => obj.id !== id),
    })),
  addItem: (item) =>
    set((state) => ({
      ...state,
      items: [...state.items, item],
    })),
  getItem: (id) => get().items.find((obj) => obj.id === id),
  updateItem: (item) =>
    set((state) => ({
      ...state,
      items: state.items.map((u) => {
        if (u.id === item.id) {
          return item
        } else return u
      }),
    })),
}))
