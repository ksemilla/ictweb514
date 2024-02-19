import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { useEffect } from "react"
import { User, useCommonStore } from "./stores/common"

function App() {
  const setUsers = useCommonStore((state) => state.setUsers)
  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=100")
      .then((res) => res.json())
      .then((res) =>
        setUsers(
          res.map((user: User) => ({
            ...user,
            name: user.first_name + " " + user.last_name,
          }))
        )
      )
  }, [])

  return <RouterProvider router={router} />
}

export default App
