import { Link, Outlet } from "react-router-dom"

export function BaseLayout() {
  return (
    <>
      <nav className="text-center space-x-4 border-b">
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
      </nav>
      <Outlet />
    </>
  )
}
