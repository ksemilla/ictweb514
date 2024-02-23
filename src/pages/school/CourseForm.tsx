import { DeepPartial, FormProvider, useForm } from "react-hook-form"
import { Course } from "../../stores/school"
import { TextInput } from "../../components/TextInput"

type SchoolUserFormProps = {
  defaultValues?: DeepPartial<Course>
  onSubmit: (user: Course) => void
}

export function CourseForm(props: SchoolUserFormProps) {
  const methods = useForm<Course>({
    defaultValues: props.defaultValues,
  })

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => props.onSubmit(data))}
          className="space-y-4"
        >
          <TextInput
            label="Name"
            {...methods.register("name", {
              required: "This field is required",
            })}
          />
          <TextInput
            label="Code"
            {...methods.register("code", {
              required: "This field is required",
            })}
          />
          <TextInput
            label="Description"
            {...methods.register("description", {
              required: "This field is required",
            })}
          />
          <TextInput
            label="Time"
            {...methods.register("time", {
              required: "This field is required",
            })}
          />
          <div className="">
            <button className="w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {props.defaultValues ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
