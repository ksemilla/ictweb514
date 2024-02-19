import { DeepPartial, FormProvider, useForm } from "react-hook-form"
import { User } from "../../stores/common"
import { TextInput } from "../../components/TextInput"

type UserFormProps = {
  onSubmit: (user: User) => void
  defaultValues?: DeepPartial<User>
}

export function UserForm(props: UserFormProps) {
  const methods = useForm<User>({
    defaultValues: props.defaultValues,
  })

  const onSubmit = methods.handleSubmit((data) => props.onSubmit(data))

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-md max-w-xl m-auto border p-4 mt-8"
      >
        <TextInput
          label="Name"
          {...methods.register("name", { required: "This field is required" })}
        />
        <TextInput
          label="Phone"
          {...methods.register("phone_number", {
            required: "This field is required",
          })}
        />
        <TextInput
          label="Email"
          {...methods.register("email", { required: "This field is required" })}
        />
        <div className="space-y-4">
          <h3 className="font-semibold">Address</h3>
          <div className="flex space-x-2">
            <div className="flex-1">
              <TextInput
                label="Street Address"
                {...methods.register("address.street_address", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="flex-1">
              <TextInput
                label="Street Name"
                {...methods.register("address.street_name", {
                  required: "This field is required",
                })}
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="flex-1">
              <TextInput
                label="City"
                {...methods.register("address.city", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="flex-1">
              <TextInput
                label="State"
                {...methods.register("address.state", {
                  required: "This field is required",
                })}
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="flex-1">
              <TextInput
                label="Country"
                {...methods.register("address.country", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="flex-1">
              <TextInput
                label="Zip Code"
                {...methods.register("address.zip_code", {
                  required: "This field is required",
                })}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
