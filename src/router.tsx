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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AuthLayout />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<UserList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Route>
      </Route>
    </Route>
  )
)
