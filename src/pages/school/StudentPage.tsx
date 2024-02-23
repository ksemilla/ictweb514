import { Tab } from "@headlessui/react"
import { SchoolUser, useSchoolStore } from "../../stores/school"
import { classNames } from "../../utils"
import { schoolCourses } from "../../const"

export function StudentPage() {
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

      <div className="w-full px-2 py-16 sm:px-0">
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
              My Courses
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
              All Courses
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
              )}
            >
              <div className="space-y-4">
                {user?.courses?.map((c, i) => (
                  <div key={i} className="p-4 rounded-md shadow">
                    <p className="text-3xl">{c.code}</p>
                    <p className="text-lg">{c.name}</p>
                    <p className="text-lg">{c.time}</p>
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
              <div className="space-y-4">
                {schoolCourses.map((c, i) => (
                  <div key={i} className="p-4 rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-3xl">{c.code}</p>
                      {!user?.courses?.map((c) => c.id).includes(c.id) && (
                        <button
                          className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={() => {
                            const newUser = user as SchoolUser
                            newUser?.courses?.push(c)
                            setUser(newUser)
                          }}
                        >
                          Enroll
                        </button>
                      )}
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
    </div>
  )
}
