import { Link, Outlet } from "react-router-dom"

export function BaseLayout() {
  return (
    <>
      <nav className="text-center space-x-4 border-b">
        <Link to="/app1">App 1</Link>
        <Link to="/app2">App 2</Link>
        <Link to="/app3">App 3</Link>
      </nav>
      <Outlet />
    </>
  )
}
