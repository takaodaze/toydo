import styled from "@emotion/styled";
import { COLORS } from "color";
import { SOUNDS } from "snd-lib/dist/constant";
import { snd } from "sound/snd";
import { IoCheckmark } from "react-icons/io5";

type Props = {
    isCheck: boolean;
    size: number;
    onClick?: () => void;
};

export const Check = (props: Props) => {
    const handleClick = () => {
        if (props.isCheck) {
            snd.play(SOUNDS.TRANSITION_DOWN);
        } else {
            snd.play(SOUNDS.CELEBRATION);
        }
        props.onClick && props.onClick();
    };
    return (
        <EmCheck
            isCheck={props.isCheck}
            size={props.size}
            onClick={handleClick}
        >
            <IoCheckmark size={props.size - 5} color="inherit" />
        </EmCheck>
    );
};

const EmCheck = styled.div((props: { isCheck?: boolean; size: number }) => ({
    color: "white",
    background: props.isCheck ? COLORS.BLUE : "inherit",
    border: `2px solid ${COLORS.BLUE}`,
    height: props.size + "px",
    width: props.size + "px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "linear 0.1s",
}));
