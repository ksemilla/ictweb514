import { Link } from "react-router-dom"
import { SchoolUser, useSchoolStore } from "../../stores/school"
import { SchoolUserForm } from "./SchoolUserForm"
import { v4 as uuidv4 } from "uuid"

export function StudentCreate() {
  const { createUser, isLogged } = useSchoolStore()
  const onSubmit = (user: SchoolUser) => {
    createUser({ ...user, id: uuidv4() })
  }
  return (
    <div className="max-w-md m-auto mt-8">
      <h1 className="font-semibold text-xl text-center mb-4">Create Account</h1>
      <SchoolUserForm onSubmit={onSubmit} />
      {!isLogged && (
        <div className="text-center mt-4">
          <Link to="/school/login" className="text-sm hover:text-blue-500">
            or Login
          </Link>
        </div>
      )}
    </div>
  )
}
