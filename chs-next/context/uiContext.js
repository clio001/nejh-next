import { createContext, useState } from "react";
import doc from "../pages/items/docs.json" assert { type: "json" };

export const uiContext = createContext();

export const UIContextProvider = (props) => {
  const [openPanel, setOpenPanel] = useState(false);
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();

  const genArray = () => {
    const array = [];
    for (let i = 0; i < doc.length; i++) {
      array.push(i);
    }
    return array;
  };

  return (
    <uiContext.Provider
      value={{ openPanel, setOpenPanel, first, second, third }}
    >
      {props.children}
    </uiContext.Provider>
  );
};
