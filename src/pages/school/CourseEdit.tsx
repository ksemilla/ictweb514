import { useEffect, useState } from "react"
import { Course, useSchoolStore } from "../../stores/school"
import { useNavigate, useParams } from "react-router-dom"
import { CourseForm } from "./CourseForm"

export function CoursePage() {
  const { courses, updateCourse, deleteCourse } = useSchoolStore()
  const { id } = useParams()
  const [course, setCourse] = useState<Course>()
  const onSubmit = (course: Course) => {
    updateCourse(course)
  }
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const u = courses.find((obj) => obj.id === id)
      if (u) {
        setCourse(u)
      }
    }
  }, [id])

  return !course ? (
    <div>Loading....</div>
  ) : (
    <div className="max-w-xl m-auto mt-8">
      <div className="flex justify-between items-center border-b mb-4 pb-4">
        <div>{course.name}</div>
        <button
          className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            navigate("/school/admin")
            deleteCourse(course)
          }}
        >
          Delete
        </button>
      </div>
      <CourseForm onSubmit={onSubmit} defaultValues={course} />
    </div>
  )
}
