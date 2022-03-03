import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args}>hoge</Card>
);

const commonArg: Parameters<typeof Card>[0] = {};

export const Story = Template.bind({});
Story.args = { ...commonArg };
