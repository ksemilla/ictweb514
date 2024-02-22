import { Navigate, Outlet } from "react-router-dom"
import { useSchoolStore } from "../stores/school"

export function SchoolAuthLayout() {
  const { isLogged } = useSchoolStore()

  if (!isLogged) {
    return <Navigate to="/school/login" />
  }
  return <Outlet />
}
