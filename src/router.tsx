import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { AuthLayout } from "./layouts/AuthLayout"
import { BaseLayout } from "./layouts/BaseLayout"
import { UserList } from "./pages/users/UserList"
import { UserDetail } from "./pages/users/UserDetail"
import { UserEdit } from "./pages/users/UserEdit"
import { UserCreate } from "./pages/users/UserCreate"
import { ItemList } from "./pages/items/ItemList"
import { ItemCreate } from "./pages/items/ItemCreate"
import { ItemEdit } from "./pages/items/ItemEdit"
import { LoginPage } from "./pages/school/LoginPage"
import { StudentCreate } from "./pages/school/StudentCreate"
import { SchoolAuthLayout } from "./layouts/SchoolAuthLayout"
import { TeacherPage } from "./pages/school/TeacherPage"
import { StudentPage } from "./pages/school/StudentPage"
import { AdminPage } from "./pages/school/AdminPage"
import { SchoolUserPage } from "./pages/school/SchoolUserPage"
import { CourseCreate } from "./pages/school/CourseCreate"
import { CoursePage } from "./pages/school/CourseEdit"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthLayout />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<UserList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/:id/edit" element={<UserEdit />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/create" element={<ItemCreate />} />
          <Route path="/items/:id/edit" element={<ItemEdit />} />
          <Route path="/school/" element={<LoginPage />} />
          <Route path="/school/login" element={<LoginPage />} />
          <Route path="/school/signup" element={<StudentCreate />} />
          <Route element={<SchoolAuthLayout />}>
            <Route path="/school/my-teacher" element={<TeacherPage />} />
            <Route path="/school/my-student" element={<StudentPage />} />
            <Route path="/school/admin" element={<AdminPage />} />
            <Route path="/school/user/:id" element={<SchoolUserPage />} />
            <Route path="/school/course/create" element={<CourseCreate />} />
            <Route path="/school/course/:id" element={<CoursePage />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
)
