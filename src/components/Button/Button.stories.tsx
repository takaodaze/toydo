import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

const commonArg: Parameters<typeof Button>[0] = {
  onClick: () => null,
  children: "登録",
};

export const Story = Template.bind({});
Story.args = { ...commonArg };
