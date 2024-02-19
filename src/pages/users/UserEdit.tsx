import { useNavigate, useParams } from "react-router-dom"
import { User, useCommonStore } from "../../stores/common"
import { UserForm } from "./UserForm"
import { useEffect, useState } from "react"

export function UserEdit() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>()
  const { getUser, updateUser } = useCommonStore()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      setUser(getUser(id ?? ""))
    }
  }, [id])
  const onSubmit = (user: User) => {
    updateUser(user)
    navigate(`/users/${user.id}`)
  }

  return !user ? (
    <div>Loading...</div>
  ) : (
    <UserForm onSubmit={onSubmit} defaultValues={user} />
  )
}
