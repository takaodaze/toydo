import { Card } from "components/Card/Card";

export const Root = () => {
    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                padding: "10px",
                flexDirection: "column",
            }}
        >
            <Card>aaaaaaaaa</Card>
            <Card>bbbbbbbbbbb</Card>
            <Card>ccc</Card>
            <h1>HELLO WORLD</h1>
        </div>
    );
};
