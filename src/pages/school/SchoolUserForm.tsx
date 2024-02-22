import { DeepPartial, FormProvider, useForm } from "react-hook-form"
import { SchoolUser, useSchoolStore } from "../../stores/school"
import { TextInput } from "../../components/TextInput"
import { SelectInput } from "../../components/SelectInput"

type SchoolUserFormProps = {
  defaultValues?: DeepPartial<SchoolUser>
  onSubmit: (user: SchoolUser) => void
}

export function SchoolUserForm(props: SchoolUserFormProps) {
  const methods = useForm<SchoolUser>({
    defaultValues: props.defaultValues,
  })
  const { user, isLogged } = useSchoolStore()

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            props.onSubmit({ ...data, role: isLogged ? data.role : "student" })
          )}
          className="space-y-4"
        >
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
          {user?.role === "admin" && (
            <SelectInput
              options={[
                { label: "Student", value: "student" },
                { label: "Teacher", value: "teacher" },
                { label: "Admin", value: "admin" },
              ]}
              label="Role"
              {...methods.register("role")}
            />
          )}
          <TextInput
            label="Name"
            {...methods.register("name", {
              required: "This field is required",
            })}
          />
          <div className="">
            <button className="w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Create
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
