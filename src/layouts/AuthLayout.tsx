import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../stores/auth"

export function AuthLayout() {
  const isLogged = useAuthStore((state) => state.isLogged)

  if (!isLogged) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
