import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setinput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompts, setprevPrompts] = useState([]);
    const [showResult, setshowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState("");

    const onSent = async (prompt) => {
        setresultData("");
        setloading(true);
        setshowResult(true); 
        setrecentPrompt(input);
        const response = await run(input);
        setresultData(response);
        setloading(false);
        setinput("");
    };

    const contextValue = {
        prevPrompts,
        setprevPrompts,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showResult,
        setshowResult,  // Added this line
        loading,
        resultData,
        input,
        setinput,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
