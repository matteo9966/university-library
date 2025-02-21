import { ComponentProps, useRef } from "react";
import Input from "./input";
export const ColorInput: React.FC<ComponentProps<"input">> = (props) => {
  const { type, ref: elementRef, ...rest } = props;
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div ref={elementRef} className="relative">
      <input
        type="color"
        {...rest}
        ref={ref}
        className="absolute left-[5px] w-[20px] h-[20px] rounded-sm top-[50%] translate-y-[-50%]"
      />
      <Input
        value={rest.value}
        type="text"
        className="border bg-opacity-100 dark:bg-dark-100 dark:text-white ps-[30px]"
        readOnly
        onClick={() => {
          ref.current?.click();
        }}
      />
    </div>
  );
};
