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
        className="absolute right-0 top-[10px]"
      />
      <Input
        value={rest.value}
        type="text"
        className="border"
        readOnly
        onClick={() => {
          ref.current?.click();
        }}
      />
    </div>
  );
};
