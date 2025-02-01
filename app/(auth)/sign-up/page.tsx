

'use client'
import AuthComponent from "@/components/AuthComponent";
import { signupDefaultValue } from "@/lib/defaultValues";
import { signupValidatorSchema } from "@/lib/zodValidators";


const Page = ()=>{
    return (
        <AuthComponent
            formDefaultValue={signupDefaultValue}
            schema={signupValidatorSchema}
            title="Sign up"
            onSubmit={async (data)=>{
                console.log(data);
            }}
        />
    )
}

export default Page;