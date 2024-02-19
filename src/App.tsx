import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { useEffect, useState } from "react"
import { User, useCommonStore } from "./stores/common"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [loading, setLoading] = useState(true)
  const setUsers = useCommonStore((state) => state.setUsers)
  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=100")
      .then((res) => res.json())
      .then((res) => {
        setUsers(
          res.map((user: User) => ({
            ...user,
            name: user.first_name + " " + user.last_name,
            id: uuidv4(),
          }))
        )
        setLoading(false)
      })
  }, [])

  return loading ? <div>Loading...</div> : <RouterProvider router={router} />
}

export default App
