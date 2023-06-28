import React, { useContext, useRef } from "react";
import { TodoContext } from "../App";
const Input = () => {
    const context = useContext(TodoContext);
    const { work, works, setWork, setWorks } = context;
    const inputRef = useRef();
    const handleSubmit = () => {
        setWorks((prev) => [...prev, work]);
        setWork("");
        inputRef.current.focus();
    };
    return (
        <div className="text-lg">
            <input
                ref={inputRef}
                type="text"
                className="outline-none border border-red-400 px-4 py-2 rounded-sm w-[350px]"
                value={work}
                onChange={(e) => setWork(e.target.value)}
            />
            <button
                type="button"
                className="bg-red-400 p-2 ml-2 rounded-sm text-white"
                onClick={handleSubmit}
            >
                ADD
            </button>
            <ul>
                {works.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Input;
