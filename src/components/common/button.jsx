import { cva } from "class-variance-authority";
import { cn } from "../../utils/shadecn";

const buttonVariant = cva("font-rubik", {
  variants: {
    variant: {
      ghost: "text-xs font-medium md:text-[18px]",
      primary: "rounded-lg bg-[#070148] px-4 py-1 text-xs text-white md:text-[18px] lg:rounded-[14px] lg:px-[40px] lg:py-[15px] hover:bg-[#1f13a5] focus:ring-4 focus:outline-none focus:ring-[#93c5fd]",
      secondary: "rounded-lg bg-[#070148] px-4 py-2 text-xs font-medium text-[#FFF] md:rounded-[14px] md:px-[60px] md:py-[30px] md:text-2xl hover:bg-[#1f13a5] focus:ring-4 focus:outline-none focus:ring-[#93c5fd]"
    },
  },
});

export function Button({ children, className, variant }) {
  const variantsResult = buttonVariant({
    variant : variant,
  });
  return <button className={cn(variantsResult, className)}>{children}</button>;
}
