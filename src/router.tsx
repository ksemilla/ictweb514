import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { LoginPage } from "./pages/login/LoginPage"
import { AuthLayout } from "./layouts/AuthLayout"
import { BaseLayout } from "./layouts/BaseLayout"
import { Page1List } from "./pages/page1/Page1List"
import { Page1Detail } from "./pages/page1/Page1Detail"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AuthLayout />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Page1List />} />
          <Route path="/app1" element={<Page1List />} />
          <Route path="/app1/:id" element={<Page1Detail />} />
        </Route>
      </Route>
    </Route>
  )
)
