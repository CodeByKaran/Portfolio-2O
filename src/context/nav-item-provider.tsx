"use client";

import { NavItem, NavItemContextType } from "@/interfaces";
import { createContext, useContext, useMemo, ReactNode } from "react";
import { useState } from "react";

const NavItemContext = createContext<NavItemContextType | undefined>(undefined);

export function useNavItem() {
  const context = useContext(NavItemContext);
  if (!context) {
    throw new Error("useNavItem must be used within a NavItemProvider");
  }
  return context;
}

export default function NavItemProvider({ children }: { children: ReactNode }) {
  const [activeNavItem, setActiveNavItem] = useState<NavItem>("Home");

  const value = useMemo(
    () => ({
      activeNavItem,
      setActiveNavItem,
    }),
    [activeNavItem],
  );

  return (
    <NavItemContext.Provider value={value}>{children}</NavItemContext.Provider>
  );
}
