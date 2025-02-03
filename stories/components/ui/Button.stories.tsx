import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {fn} from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {buttonText:string};

const meta: Meta<StoryProps> = {
  title: "ui/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    
  },
  argTypes: {
    variant: {
      description: "The variant of the button. use it",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    rounded: {
      options: ["default", "full"],
    },
    
  },
  args: {
    variant: "default",
    size: "default",
    rounded: "default",
    buttonText:"Hello",
    onClick:fn()
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    rounded: "default",
    buttonText:"Hello"
  },
  render: ({buttonText,...args}) => <Button {...args} onClick={()=>{console.log("")}}>{buttonText}</Button>,
};
export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "default",
    rounded: "default",
    buttonText:"Secondary hello"
  },
  render: ({buttonText,...args}) => <Button {...args} onClick={()=>{console.log("")}}>{buttonText}</Button>,
};
