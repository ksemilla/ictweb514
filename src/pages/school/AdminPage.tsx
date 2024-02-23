import { Tab } from "@headlessui/react"
import { useSchoolStore } from "../../stores/school"
import { classNames } from "../../utils"
import { useNavigate } from "react-router-dom"

export function AdminPage() {
  const { user, setUser, setIsLogged, users, courses } = useSchoolStore()
  const navigate = useNavigate()
  return (
    <div className="max-w-2xl m-auto mt-8">
      <div className="flex justify-between mb-4">
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
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-black/50 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Users
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-black/50 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Courses
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            <button
              className="inline rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4"
              onClick={() => {
                navigate("/school/signup")
              }}
            >
              Create new User
            </button>
            <div className="space-y-4">
              {users.map((u, i) => (
                <div
                  key={i}
                  className="p-4 rounded-md shadow cursor-pointer hover:bg-gray-50"
                  onClick={() => navigate(`/school/user/${u.id}`)}
                >
                  <div className="flex justify-between">
                    <p className="text-3xl">{u.name}</p>
                  </div>
                  <p className="text-lg">{u.email}</p>
                  <p className="text-lg">{u.role}</p>
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            <button
              className="inline rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4"
              onClick={() => {
                navigate("/school/course/create")
              }}
            >
              Create new course
            </button>
            <div className="space-y-4">
              {courses.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-md shadow cursor-pointer hover:bg-gray-50"
                  onClick={() => navigate(`/school/course/${c.id}`)}
                >
                  <div className="flex justify-between">
                    <p className="text-3xl">{c.code}</p>
                  </div>
                  <p className="text-lg">{c.name}</p>
                  <p className="text-lg">{c.time}</p>
                </div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
