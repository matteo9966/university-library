import { ComponentProps } from "react";
import { cn } from "@/app/lib/utils";
const Input: React.FC<ComponentProps<"input">> = (props) => {
  return (
    <input
      ref={props?.ref}
      {...props}
      className={cn(
        `input-field-size bg-white text-base rounded-md
        [&:not(:placeholder-shown)]:font-bold
         text-white bg-opacity-5 px-2 placeholder:text-muted py-3`,
        props.className
      )}
    />
  );
};

export default Input;
