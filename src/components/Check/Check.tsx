import styled from "@emotion/styled";
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
            snd.play(SOUNDS.TOGGLE_OFF);
        }
        props.onClick && props.onClick();
    };
    return (
        <EmCheck
            isCheck={props.isCheck}
            size={props.size}
            onClick={handleClick}
        >
            {props.isCheck && (
                <IoCheckmark size={props.size - 5} color="white" />
            )}
        </EmCheck>
    );
};

const EmCheck = styled.div((props: { isCheck?: boolean; size: number }) => ({
    background: props.isCheck ? "#233662" : "inherit",
    border: "1px solid #233662",
    height: props.size + "px",
    width: props.size + "px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "linear 0.2s",
}));
