import styled from "@emotion/styled";
import { FC, useCallback, useEffect, useRef } from "react";

export const Card: FC = (props) => {
    const ele = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        moveAt(event.pageX, event.pageY);
    }, []);

    const moveAt = (pageX: number, pageY: number) => {
        const { current: card } = ele;
        if (card == null) {
            return null;
        }
        card.style.left = pageX - card.offsetWidth / 2 + "px";
        card.style.top = pageY - card.offsetHeight / 2 + "px";
    };

    useEffect(() => {
        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <EmDiv
            ref={ele}
            onMouseDown={(event) => {
                const { current: card } = ele;
                if (card == null) {
                    return null;
                }
                card.style.position = "absolute";
                moveAt(event.pageX, event.pageY);
                document.body.addEventListener("mousemove", handleMouseMove);
            }}
            onMouseUp={() => {
                document.body.removeEventListener("mousemove", handleMouseMove);
            }}
        >
            {props.children}
        </EmDiv>
    );
};

const EmDiv = styled.div({
    padding: "15px",
    background: "rgba(255,255,255,0.4)",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    display: "inline-block",
    cursor: "pointer",
    userSelect: "none",
});
