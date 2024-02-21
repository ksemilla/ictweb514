import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { LoginPage } from "./pages/login/LoginPage"
import { AuthLayout } from "./layouts/AuthLayout"
import { BaseLayout } from "./layouts/BaseLayout"
import { UserList } from "./pages/users/UserList"
import { UserDetail } from "./pages/users/UserDetail"
import { UserEdit } from "./pages/users/UserEdit"
import { UserCreate } from "./pages/users/UserCreate"
import { ItemList } from "./pages/items/ItemList"
import { ItemCreate } from "./pages/items/ItemCreate"
import { ItemEdit } from "./pages/items/ItemEdit"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AuthLayout />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<UserList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/:id/edit" element={<UserEdit />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/create" element={<ItemCreate />} />
          <Route path="/items/:id/edit" element={<ItemEdit />} />
        </Route>
      </Route>
    </Route>
  )
)
