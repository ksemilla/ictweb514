import { useEffect, useState } from "react"
import { SchoolUser, useSchoolStore } from "../../stores/school"
import { SchoolUserForm } from "./SchoolUserForm"
import { useNavigate, useParams } from "react-router-dom"

export function SchoolUserPage() {
  const { users, updateUser, user: currentUser, deleteUser } = useSchoolStore()
  const { id } = useParams()
  const [user, setUser] = useState<SchoolUser>()
  const onSubmit = (user: SchoolUser) => {
    updateUser(user)
  }
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const u = users.find((obj) => obj.id === id)
      if (u) {
        setUser(u)
      }
    }
  }, [id])

  return !user ? (
    <div>Loading....</div>
  ) : (
    <div className="max-w-xl m-auto mt-8">
      {user.id !== currentUser?.id && (
        <>
          <h1 className="text-center mt-8 font-semibold text-3xl">
            Updating User
          </h1>
          <div className="flex justify-between items-center border-b mb-4 pb-4">
            <div>{user.email}</div>
            <button
              className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                navigate("/school/admin")
                deleteUser(user)
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
      <SchoolUserForm onSubmit={onSubmit} defaultValues={user} />
    </div>
  )
}
