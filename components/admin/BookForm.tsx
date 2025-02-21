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
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

type Props<P extends FieldValues> = {
  formDefaultValue: DefaultValues<typeof bookDefaultValues>;
  authors: Authors[];
};

function BookForm<P extends FieldValues>({
  formDefaultValue,
  authors,
}: Props<P>) {
  const { control, getFieldState, formState, getValues } = useForm({
    defaultValues: formDefaultValue,
  });
  return (
    <form
      onSubmit={(e) => {
        const formData = new FormData(e.target as HTMLFormElement);
        e.preventDefault();
        console.log(formData);
        console.log(e);
      }}
      className="flex  flex-col gap-7"
    >
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
          case "text-area":
            ControlInput = Textarea as any;
            break;
          case "select":
            ControlInput = selectAuthorInputHoc(authors) as any;
            break;
          //   case "text-area"
          // ControlInput = 'text-area'

          default:
            ControlInput = Input;
            break;
        }

        // create a select element that behaves like a

        return (
          <Controller
            name={key as Path<typeof FieldTypes>}
            key={key}
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
                    className="bg-opacity-100 bg-white dark:bg-dark-100 text-black dark:text-light-100 border placeholder:text-gray-400"
                  />
                  {error && error.message}
                </div>
              );
            }}
          ></Controller>
        );
      })}
      <Button variant={"default"} type="submit">
        Submit
      </Button>

      <pre>{JSON.stringify(getValues(), null, 2)}</pre>
    </form>
  );
}

export default BookForm;

function selectAuthorInputHoc(authors: Authors[]) {
  return function SelectInput(
    props: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > & { onChange: (...event: any[]) => void; value: string }
  ) {
    return (
      <Select onValueChange={props.onChange} defaultValue={props.value}>
        <SelectTrigger>
          <SelectValue placeholder="Select a verified email to display" />
        </SelectTrigger>
        <SelectContent>
          {authors.map((author) => {
            return (
              <SelectItem key={author.id} value={author.id}>
                {author.name} - {author.id}{" "}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    );
  };
}
