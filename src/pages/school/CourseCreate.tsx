import { Course, useSchoolStore } from "../../stores/school"
import { v4 as uuidv4 } from "uuid"
import { CourseForm } from "./CourseForm"

export function CourseCreate() {
  const { createCourse } = useSchoolStore()
  const onSubmit = (user: Course) => {
    createCourse({ ...user, id: uuidv4() })
  }
  return (
    <div className="max-w-md m-auto mt-8">
      <h1 className="font-semibold text-xl text-center mb-4">Create Course</h1>
      <CourseForm onSubmit={onSubmit} />
    </div>
  )
}
