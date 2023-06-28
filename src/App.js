import { useState, createContext } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Input from "./components/Input";

export const TodoContext = createContext();

function App() {
    const [work, setWork] = useState("");
    const [works, setWorks] = useState([]);
    return (
        <div className="flex justify-center items-center h-screen bg-slate-800">
            <TodoContext.Provider value={{ work, setWork, works, setWorks }}>
                <Container>
                    <Header />
                    <Input />
                </Container>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
