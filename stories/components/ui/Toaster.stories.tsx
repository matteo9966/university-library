import { Toaster } from "@/components/ui/toaster";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useId } from "react";
import { useToast } from "@/hooks/use-toast";


// import { ToastAction } from "@radix-ui/react-toast";
// import {type Toast} from '@radix-ui/react-toast';

/* 


{
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        }

*/

type StoryProps = ComponentProps<typeof Toaster> & {
  variant: "destructive" | "default"|"success";
  title: string;
  description: string;
};

const meta: Meta = {
  title: "ui/Toaster",
  component: Toaster,
  args: {
    variant: "default",
    title: "The title",
    description: "The description",
  },
  parameters: {
  
  },
  argTypes: {
    variant: { control: "select", options: ["default", "destructive","success"] },
    title: { control: "text", description: "The title of the Toaster" },
    description: { control: "text", description: "The title of the Toaster" },
  },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Toast: Story = {
  render: (_args) => {
    const { toast } = useToast();
    const id = useId();
    const onClick = () => {
      toast({
        variant: _args.variant,
        itemID: id,
        description: _args.description,
        title: _args.title,
        duration:100000
        
      });
    };

    return (
      <div>
        <button onClick={onClick}>Show toast</button>
        <Toaster></Toaster>
      </div>
    );
  },
};
export const ToastMobile: Story = {
  ...Toast,
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
// export const Destructive: Story = {

//   render: (_args) => {
//     const { toast } = useToast();
//     const id = useId();
//     const onClick = () => {
//       toast({ variant: "destructive", itemID: id });
//     };

//     return (
//       <div>
//         <button onClick={onClick}>Show toast</button>
//         <Toaster></Toaster>
//       </div>
//     );
//   },
// };

// export const Destructive: Story = {
//   ...Default,
//   args: {
//     ...Default.args,
//     toastProps: {
//       ...(Default.args?.toastProps || {}),
//       variant: "destructive",
//     },
//   },
//   render: Default.render,
// };
