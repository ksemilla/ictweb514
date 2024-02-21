import { InputHTMLAttributes, forwardRef } from "react"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { NestedObject, classNames, hasNestedKey } from "../utils"

function TextInputLabel(props: {
  label?: string
  hasError?: boolean
  name?: string
}) {
  return props.label ? (
    <label
      htmlFor={props.name}
      className={classNames(
        "block text-sm font-medium leading-6 mb-1",
        props.hasError ? "text-red-500" : ""
      )}
    >
      {props.label}
    </label>
  ) : null
}

function TextInputLeftIcon(props: { leftIcon: React.ReactNode }) {
  return props.leftIcon ? (
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      {props.leftIcon}
    </div>
  ) : null
}

function TextInputRightIcon(props: { rightIcon: React.ReactNode }) {
  return props.rightIcon ? (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      {props.rightIcon}
    </div>
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

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  placeholder?: string
}

export const NumberInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { label, leftIcon, rightIcon, ...rest } = props
    const methods = useFormContext()
    const hasError = !!hasNestedKey(
      methods?.formState.errors as NestedObject,
      props.name ?? ""
    )
    return (
      <div>
        <TextInputLabel
          label={props.label}
          hasError={hasError}
          name={props.name}
        />
        <div className="relative rounded-md shadow-sm">
          <TextInputLeftIcon leftIcon={props.leftIcon} />
          <input
            ref={ref}
            type="number"
            id={props.name}
            className={classNames(
              "block w-full rounded-md border-0 py-1.5 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/10",
              props.leftIcon ? "pl-10" : "",
              hasError
                ? "ring-red-500 focus:ring-red-500 dark:red-ring-500"
                : "ring-gray-300 focus:ring-indigo-600 dark:ring-gray-200"
            )}
            {...rest}
          />
          <TextInputRightIcon rightIcon={props.rightIcon} />
        </div>
        <TextInputError
          errors={methods.formState.errors as NestedObject}
          name={props.name ?? ""}
        />
      </div>
    )
  }
)
