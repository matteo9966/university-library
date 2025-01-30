"use client";
import {
  useForm,
  SubmitHandler,
  useController,
  UseControllerProps,
} from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  FirstName:string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm<Inputs>({
    defaultValues: {
      FirstName: "",
      example: "test",
      exampleRequired:""
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="auth-container">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        className="auth-form flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <Input name="FirstName" control={control} />
        <input type="submit" />
      </form>
    </div>
  );
}


  
  function Input(props: UseControllerProps<Inputs>) {
    const { field, fieldState } = useController(props)
  
    return (
      <div>
        <input {...field} placeholder={props.name} />
        <p>{fieldState.isTouched && "Touched"}</p>
        <p>{fieldState.isDirty && "Dirty"}</p>
        <p>{fieldState.invalid ? "invalid" : "valid"}</p>
      </div>
    )
  }