import { DeepPartial, FormProvider, useForm, useWatch } from "react-hook-form"
import { Item } from "../../stores/common"
import { TextInput } from "../../components/TextInput"
import { NumberInput } from "../../components/NumberInput"

type ItemFormProps = {
  defaultValues?: DeepPartial<Item>
  onSubmit: (data: Item) => void
}

export function ItemForm(props: ItemFormProps) {
  const methods = useForm<Item>({
    defaultValues: props.defaultValues,
  })
  const imgUrl = useWatch({
    control: methods.control,
    name: "imageUrl",
  })
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => props.onSubmit(data))}
        className="space-y-4 rounded-md max-w-xl m-auto border p-4 mt-8"
      >
        <TextInput
          label="name"
          {...methods.register("name", { required: "This field is required" })}
        />
        <TextInput
          label="Description"
          {...methods.register("description", {
            required: "This field is required",
          })}
        />
        <NumberInput
          label="Price"
          {...methods.register("price", {
            required: "This field is required",
          })}
          step="0.1"
        />
        <TextInput
          label="Image URL"
          {...methods.register("imageUrl", {
            required: "This field is required",
          })}
        />
        <img src={imgUrl} className="w-full object-cover object-center" />
        <div className="flex justify-center">
          <button className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
