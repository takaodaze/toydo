import styled from "@emotion/styled";
import { COLORS } from "color";

type Props = {
    isCheck: boolean;
    size: number;
    onClick?: () => void;
};

export const Check = (props: Props) => {
    return (
        <EmCheck
            isCheck={props.isCheck}
            size={props.size}
            onClick={() => {
                props.onClick && props.onClick();
            }}
        />
    );
};

const EmCheck = styled.div((props: { isCheck?: boolean; size: number }) => ({
    background: props.isCheck ? COLORS.BLUE : "inherit",
    border: `1px solid ${COLORS.BLUE}`,
    height: props.size + "px",
    width: props.size + "px",
    borderRadius: props.size / 2 + "px",
}));
