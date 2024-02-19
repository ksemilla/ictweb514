import { useNavigate } from "react-router-dom"
import { User, useCommonStore } from "../../stores/common"
import { UserForm } from "./UserForm"
import { v4 as uuidv4 } from "uuid"

export function UserCreate() {
  const navigate = useNavigate()
  const { addUser } = useCommonStore()

  const onSubmit = (user: User) => {
    const newUser = { ...user, id: uuidv4() }
    addUser(newUser)
    navigate(`/users/${newUser.id}`)
  }

  return <UserForm onSubmit={onSubmit} />
}
