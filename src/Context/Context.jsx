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

  const dealyPara = (index, nextWord) => {
    setTimeout(() => {
      setresultData((prev) => prev + nextWord);
    }, 70 * index);
  };

  const onSent = async (prompt) => {
    setresultData("");
    setloading(true);
    setshowResult(true); 
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setrecentPrompt(prompt);
    } else {
      setprevPrompts((prev) => [...prev, input]);
      setrecentPrompt(input);
      response = await run(input);
    }
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br className='mt-3'>");
    // setresultData(newResponse2);
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      dealyPara(i, nextWord + " ");
    }
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
    setshowResult,
    loading,
    resultData,
    input,
    setinput,  // Ensure this is included in the context value
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
