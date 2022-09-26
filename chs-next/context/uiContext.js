import { createContext, useState } from "react";

export const uiContext = createContext();

export const UIContextProvider = (props) => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <uiContext.Provider value={{ openPanel, setOpenPanel }}>
      {props.children}
    </uiContext.Provider>
  );
};
