import styled from "@emotion/styled";
import { COLORS } from "color";
import { ReactNode } from "react";
import { snd, SND_SOUND } from "sound/snd";

type Props = {
    onClick: () => void;
    children: ReactNode;
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
        >
            {props.children}
        </EmButton>
    );
};

const EmButton = styled.button({
    background: "white",
    padding: "10px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "30px",
    border: "solid 1.5px black",
    transition: "all 0.2s",
    ":hover": {
        background: COLORS.BLUE,
        color: "white",
    },
});
