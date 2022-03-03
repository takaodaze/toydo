import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Check } from "./Check";

export default {
    title: "Check",
    component: Check,
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args) => {
    const [isCheck, setIsCheck] = useState(args.isCheck);
    return (
        <Check
            isCheck={isCheck}
            onClick={() => setIsCheck((c) => !c)}
            size={40}
        ></Check>
    );
};

export const checked = Template.bind({});
checked.args = { isCheck: true };

export const unchecked = Template.bind({});
unchecked.args = { isCheck: false };
