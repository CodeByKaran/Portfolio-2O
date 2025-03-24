interface Icon {
  name: string;
  url: string;
  alt: string;
  className: string;
  delay?: number;
  rotate?: number;
}

interface NavItemContextType {
  activeNavItem: NavItem;
  setActiveNavItem: (item: NavItem) => void;
}

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    features: string[];
    challenges: string;
    image: string;
    liveDemo: string;
    github: string;
    category: string;
  };
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

type NavItem = "Home" | "About" | "Projects" | "Contact";

type ScrollDirection = "up" | "down";

export type {
  Icon,
  NavItemContextType,
  NavItem,
  ScrollDirection,
  ProjectCardProps,
};
