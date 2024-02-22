import { SelectHTMLAttributes, forwardRef } from "react"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { NestedObject, classNames, hasNestedKey } from "../utils"

function SelectInputLabel(props: { label?: string; hasError?: boolean }) {
  return props.label ? (
    <label
      htmlFor="email"
      className={classNames(
        "block text-sm font-medium leading-6",
        props.hasError ? "text-red-500" : ""
      )}
    >
      {props.label}
    </label>
  ) : null
}

function TextInputError(props: { errors: NestedObject; name: string }) {
  return (
    <ErrorMessage
      errors={props.errors}
      name={props.name ?? ""}
      render={({ message }) => (
        <p className="mt-1 text-sm text-red-500">{message}</p>
      )}
    />
  )
}

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[]
  label?: string
  placeholder?: string
  nullable?: boolean
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (props, ref) => {
    const { label, nullable, ...rest } = props
    const methods = useFormContext()
    const hasError = !!hasNestedKey(
      methods?.formState.errors as NestedObject,
      props.name ?? ""
    )
    return (
      <div>
        <SelectInputLabel label={props.label} hasError={hasError} />
        <div
          className={classNames(
            "relative rounded-md shadow-sm",
            props.label ? "mt-1" : ""
          )}
        >
          <select
            ref={ref}
            id={props.name}
            className={classNames(
              "block w-full rounded-md border-0 py-1.5 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/10",
              hasError
                ? "ring-red-500 focus:ring-red-500 dark:red-ring-500"
                : "ring-gray-300 focus:ring-indigo-600 dark:ring-gray-200"
            )}
            {...rest}
          >
            {!!props.nullable ? (
              <option value="" className="text-gray-500 dark:text-gray-700">
                {" "}
                -- Select --{" "}
              </option>
            ) : null}
            {props.options.map((o) => (
              <option
                value={o.value}
                key={o.value}
                className="dark:text-gray-700"
              >
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <TextInputError
          errors={methods.formState.errors as NestedObject}
          name={props.name ?? ""}
        />
      </div>
    )
  }
)
