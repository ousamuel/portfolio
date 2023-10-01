"use client";
import React, { useState, useEffect, createContext } from "react";
import { Progress } from "@nextui-org/react";
export const Context = createContext([]);

export function Providers({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}