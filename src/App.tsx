import { Root } from "pages/Root";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="*" element={<>NOT FOUND</>} />
            </Routes>
        </div>
    );
}

export default App;
