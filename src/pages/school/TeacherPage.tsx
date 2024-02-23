import { useSchoolStore } from "../../stores/school"

export function TeacherPage() {
  const { user, setUser, setIsLogged } = useSchoolStore()

  return (
    <div className="max-w-xl m-auto mt-8">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-2xl">{user?.name}</h1>
          <p>{user?.email}</p>
        </div>
        <div>
          <button
            className="inline rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              setUser(null)
              setIsLogged(false)
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {user?.courses?.map((c, i) => (
          <div key={i} className="p-4 rounded-md shadow">
            <p className="text-3xl">{c.code}</p>
            <p className="text-lg">{c.name}</p>
            <p className="text-lg">{c.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
