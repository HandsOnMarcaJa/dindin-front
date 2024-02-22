import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, ...props }, ref) => {
    return (
      <button
        className="bg-violet-500 text-white px-3 py-1.5 rounded disabled:opacity-75 disabled:cursor-not-allowed"
        {...props}
        ref={ref}
      >
        {text}
      </button>
    )
  },
)

Button.displayName = 'Button'
