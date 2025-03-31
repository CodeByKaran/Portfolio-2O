"use client";
import { useNavItem } from "@/context/nav-item-provider";
import { NavItem, ScrollDirection } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

const useCustomScroll = () => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("down");
  const { activeNavItem, setActiveNavItem } = useNavItem();
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollInto = useCallback(
    (item: NavItem) => {
      if (activeNavItem === item || isScrolling) return;

      setIsScrolling(true);
      const element = document.getElementById(item);

      if (element) {
        const yOffset = -100; // Adjust this value based on your header height
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });

        setActiveNavItem(item);

        setIsScrolling(false);
      }
    },
    [activeNavItem, setActiveNavItem, isScrolling],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      setLastScrollY(currentScrollY);
      setScrollDirection(diff > 0 ? "down" : "up");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isScrolling]);

  const handleViewportEnter = useCallback(
    (item: NavItem) => {
      if (!isScrolling) {
        setActiveNavItem(item);
      }
    },
    [setActiveNavItem, isScrolling],
  );

  const handleViewportLeave = useCallback(
    (item1: NavItem, item2: NavItem) => {
      if (isScrolling) return;

      if (scrollDirection === "up") {
        setActiveNavItem(item1);
      } else {
        setActiveNavItem(item2);
      }
    },
    [scrollDirection, setActiveNavItem, isScrolling],
  );

  return {
    scrollDirection,
    handleViewportEnter,
    handleViewportLeave,
    scrollInto,
  };
};

export { useCustomScroll };
