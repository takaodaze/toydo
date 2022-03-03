import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginButton } from "./LoginButton";

export default {
    title: "LoginButton",
    component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = () => (
    <LoginButton></LoginButton>
);

export const Story = Template.bind({});
