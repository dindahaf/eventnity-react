import { clsx } from "clsx"
import { cn } from "../../utils/shadecn"

export function Square({className, children}){
    return (
      <>
      <div className={cn("bg-white rounded-2xl md:rounded-[30px] shadow-[0px_4px_40px_0px_rgba(91,33,182,0.19)]", className)}>
        {children}
      </div>
      </>
    )
  }