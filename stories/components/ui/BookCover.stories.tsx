import BookCover from "@/components/BookCover";

import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof BookCover>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "ui/BookCover",
  component: BookCover,
  tags: ["autodocs"],
  parameters: {},
  decorators: [
    (Story) => (
      <div style={{ margin: '3em',background:'light-gray' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  argTypes:{
    variant:{
        description:"the size of the book",
        control:{
            type:"select",
        },
        options:["extraSmall","small","medium","regular","wide"]
    },
    coverColor:{
        description:"the color of the book cover",
        control:{
            type:"color",
            presetColors: ['#ff0000', '#00ff00', '#0000ff'],
        }
    },
    bookCoverUrl:{
        description:"the url of the book cover",
        control:{
            type:"text"
        }
    }
  }
};

export const Default: Story = {
  args: {
    bookCoverUrl: "",
    className: "",
    coverColor: "#000111",
    variant: "regular",
  },
  render: (args) => <BookCover {...args}></BookCover>,
};

export default meta;
