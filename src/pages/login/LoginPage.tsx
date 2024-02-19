import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../../stores/auth"
import { Navigate } from "react-router-dom"

export function LoginPage() {
  const [error, setError] = useState("")
  const authState = useAuthStore()
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<{ email: string; password: string }>()

  const onSubmit = handleSubmit((data) => {
    const user = authState.users.find((obj) => obj.email === data.email)
    authState.setIsLogged(true)
    if (!user) {
      setError(`User with email ${data.email} doesn't exist`)
    } else if (user.password !== data.password) {
      setError("Incorrect password")
    } else {
      authState.setUser(user)
      authState.setIsLogged(true)
    }
  })

  return authState.isLogged ? (
    <Navigate to="/" />
  ) : (
    <div>
      <p>{error}</p>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: "Please enter your email" })}
        />
        <input
          type="password"
          {...register("password", {
            required: "Please enter password",
            minLength: { value: 4, message: "Minimum of 4 characters" },
          })}
        />
        <button>Login</button>
      </form>
    </div>
  )
}
