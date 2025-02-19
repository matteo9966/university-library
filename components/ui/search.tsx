import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
const Search: React.FC<ComponentProps<"input">> = (props) => {
  return (
    <div className="relative">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[50%] translate-y-[-50%] left-1"
      >
        <path
          d="M9.58366 17.5C13.9559 17.5 17.5003 13.9555 17.5003 9.58329C17.5003 5.21104 13.9559 1.66663 9.58366 1.66663C5.2114 1.66663 1.66699 5.21104 1.66699 9.58329C1.66699 13.9555 5.2114 17.5 9.58366 17.5Z"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3337 18.3333L16.667 16.6666"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        ref={props?.ref}
        {...props}
        className={cn(
          `bg-white h-full min-w-[240px] rounded-lg ps-7 pe-2 border-slate-300 border`,
          props.className
        )}
      />
    </div>
  );
};

export default Search;
