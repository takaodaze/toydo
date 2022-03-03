import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<>index</>} />
            <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
    );
}

export default App;
