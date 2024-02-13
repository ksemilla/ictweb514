import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { LoginPage } from "./pages/login/LoginPage"
import { AuthLayout } from "./layouts/AuthLayout"
import { BaseLayout } from "./layouts/BaseLayout"
import { Page1 } from "./pages/page1/Page1"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AuthLayout />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Page1 />} />
        </Route>
      </Route>
    </Route>
  )
)
