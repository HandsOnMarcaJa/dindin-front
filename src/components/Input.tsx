import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label
          className="mb-1 text-sm text-zinc-600 font-semibold"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          className="border border-zinc-400 rounded-md p-1.5 outline-none bg-[#00000000] data-[error=true]:border-red-500 ease-in-out duration-200"
          data-error={!!error}
          {...props}
          ref={ref}
          id={label}
        />
      </div>
    )
  },
)
