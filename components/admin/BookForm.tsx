"use client";
import {
  Controller,
  DefaultValues,
  FieldValues,
  useForm,
  Path,
} from "react-hook-form";
import Input from "@/components/ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { ColorInput } from "../ui/color";
import { bookDefaultValues } from "@/constants/admin/bookFormDefaultValue";
import { FIELD_NAMES, FieldTypes } from "@/constants/admin/bookformFieldNames";

type Props<P extends FieldValues> = {
  onSubmit: VoidFunction;
  formDefaultValue: DefaultValues<typeof bookDefaultValues>;
};

function BookForm<P extends FieldValues>({
  onSubmit = () => {},
  formDefaultValue,
}: Props<P>) {
  const { control, getFieldState, formState, getValues } = useForm({
    defaultValues: formDefaultValue,
  });
  return (
    <form onSubmit={onSubmit}>
      {Object.keys(formDefaultValue).map((key, id) => {
        //get the form input type
        let ControlInput: React.FC<
          React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
          >
        > = Input;
        const inputType = FieldTypes[key as keyof typeof FieldTypes];
        switch (inputType) {
          case "color":
            ControlInput = ColorInput;
            break;
          case "text":
            ControlInput = Input;
            break;

          //   case "text-area"
          // ControlInput = 'text-area'

          default:
            ControlInput = Input;
            break;
        }

        return (
          <Controller
            name={key as Path<typeof FieldTypes>}
            control={control}
            render={({
              field: { name, onBlur, onChange, ref, value, disabled },
            }) => {
              const state = getFieldState(name, formState);
              const error = state.error;

              return (
                <div>
                  <Label htmlFor="testinp" className={cn("text-lg")}>
                    {FIELD_NAMES[key as keyof typeof FIELD_NAMES]}
                  </Label>
                  <ControlInput
                    id={name}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    ref={ref}
                    value={value}
                    placeholder={FIELD_NAMES[key as keyof typeof FIELD_NAMES]}
                    className=" bg-white dark:bg-dark-100 text-black dark:text-light-100 border"
                  />
                  {error && error.message}
                </div>
              );
            }}
          ></Controller>
        );
      })}

      {/* <Controller
        name={"input" as Path<typeof bookDefaultValues>}
        control={control}
        render={({
          field: { name, onBlur, onChange, ref, value, disabled },
        }) => {
          const state = getFieldState(name, formState);
          const error = state.error;

          return (
            <div>
              <Label htmlFor="testinp" className={cn("text-lg")}>
                Label
              </Label>
              <Input
                type="text"
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                value={value}
                placeholder={""}
                className=""
              />
              {error && error.message}
            </div>
          );
        }}
      ></Controller>
      {} */}

      {JSON.stringify(getValues())}
    </form>
  );
}

export default BookForm;
