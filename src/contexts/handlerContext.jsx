import React, { createContext, useState } from "react";
import { useLocalStorage } from "../utils/hooks";

export const HandlerContext = createContext(null);

function HandlerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemId, setItemId] = useState("");
  const [method, setMethod] = useState("");
  const [userData, setUserData] = useLocalStorage("linkrUserData", "");
  const logout = () => {
    setUserData("empty");
    localStorage.removeItem("linkrUserData");
  };
  return (
    <HandlerContext.Provider
      value={{
        isOpen,
        setIsOpen,
        userData,
        setUserData,
        logout,
        itemId,
        setItemId,
        method,
        setMethod,
      }}
    >
      {children}
    </HandlerContext.Provider>
  );
}

export default HandlerProvider;
