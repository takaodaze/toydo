import styled from "@emotion/styled";
import { COLORS } from "color";
import { snd, SND_SOUND } from "sound/snd";

type Props = {
    onClick: () => void;
    label: string;
    borderRadius?: "S" | "M" | "L";
    w?: string;
    h?: string;
};

export const Button = (props: Props) => {
    return (
        <EmButton
            onClick={() => {
                snd.play(SND_SOUND.BUTTON);
                props.onClick();
            }}
            onMouseEnter={() => {
                snd.play(SND_SOUND.TAP);
            }}
            borderRadius={props.borderRadius ?? "M"}
            w={props.w}
            h={props.h}
        >
            {props.label}
        </EmButton>
    );
};

function convBorderRadius(radius: Props["borderRadius"]) {
    switch (radius) {
        case "S":
            return "10px";
        case "M":
            return "20px";
        case "L":
            return "30px";
    }
}

const EmButton = styled.button(
    (props: {
        w?: string;
        h?: string;
        borderRadius?: Props["borderRadius"];
    }) => ({
        width: props.w,
        height: props.h,
        background: "black",
        padding: "10px 30px",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: convBorderRadius(props.borderRadius ?? "M"),
        border: "solid 1.5px black",
        transition: "all 0.2s",
        ":hover": {
            background: COLORS.BLUE,
            color: "white",
        },
    })
);
