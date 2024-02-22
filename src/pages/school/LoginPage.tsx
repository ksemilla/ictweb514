import { FormProvider, useForm } from "react-hook-form"
import { TextInput } from "../../components/TextInput"
import { Link, useNavigate } from "react-router-dom"
import { useSchoolStore } from "../../stores/school"
import { useState } from "react"

export function LoginPage() {
  const { users, setIsLogged, setUser } = useSchoolStore()
  const methods = useForm<{ email: string; password: string }>()
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const onSubmit = methods.handleSubmit((data) => {
    const user = users.find((obj) => obj.email === data.email)
    if (!user) {
      setError("No user found")
    } else if (user.password !== data.password) {
      setError("Incorrect password")
    } else {
      setError("")
      setIsLogged(true)
      setUser(user)
      switch (user.role) {
        case "admin":
          navigate("/school/admin")
          break
        case "teacher":
          navigate("/school/my-teacher")
          break
        default:
          navigate("/school/my-user")
          break
      }
    }
  })

  return (
    <div className="max-w-md m-auto mt-8">
      <h1 className="text-center font-semibold text-xl ">Login</h1>
      {!!error && (
        <p className="my-4 text-center text-red-700 bg-red-50 rounded-md p-4">
          {error}
        </p>
      )}
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="space-y-4 ">
          <TextInput
            label="Email"
            type="email"
            {...methods.register("email", {
              required: "This field is required",
            })}
          />
          <TextInput
            label="Password"
            type="password"
            {...methods.register("password", {
              required: "This field is required",
            })}
          />
          <div className="flex justify-end">
            <button className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Login
            </button>
          </div>
        </form>
      </FormProvider>
      <div className="text-center">
        <Link to="/school/signup" className="text-sm hover:text-blue-500">
          or Signup
        </Link>
      </div>
    </div>
  )
}
