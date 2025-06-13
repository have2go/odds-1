import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sh-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-sh-primary text-sh-primary-foreground shadow hover:bg-sh-primary/90",
        destructive:
          "bg-sh-destructive text-sh-destructive-foreground shadow-sm hover:bg-sh-destructive/90",
        outline:
          "border border-sh-input bg-sh-background shadow-sm hover:bg-sh-accent hover:text-sh-accent-foreground",
        secondary:
          "bg-sh-secondary text-sh-secondary-foreground shadow-sm hover:bg-sh-secondary/80",
        ghost: "hover:bg-sh-accent hover:text-sh-accent-foreground",
        link: "text-sh-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-white to-gray-300 text-black shadow-lg hover:from-gray-100 hover:to-gray-400 transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        xl: "h-12 px-12 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
