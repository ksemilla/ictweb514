import { Link, Outlet } from "react-router-dom"

export function BaseLayout() {
  return (
    <>
      <nav className="text-center space-x-4 border-b">
        <Link to="/users">Users</Link>
        <Link to="/items">Items</Link>
        <Link to="/school">School</Link>
      </nav>
      <Outlet />
    </>
  )
}
