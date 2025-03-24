import {
  Home,
  User,
  FolderKanban,
  Contact,
  GitBranch,
  Laptop,
  Server,
  Zap,
} from "lucide-react";

const profileUrl = {
  linkedin: "https://www.linkedin.com/in/karan-kumar-ba84112b3",
  github: "https://github.com/CodeByKaran?tab=repositories",
  twitter: "https://x.com/Dev0Karan",
  email: "mailto:karankumarascode@gmail.com",
};

const navItems = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "About",
    icon: User,
  },
  {
    name: "Projects",
    icon: FolderKanban,
  },
  {
    name: "Contact",
    icon: Contact,
  },
];

const skillCategories = [
  {
    name: "Frontend",
    icon: Laptop,
    skills: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        level: 90,
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: 95,
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        level: 90,
      },
      {
        name: "Shadcn",
        icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
        level: 85,
      },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        level: 85,
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        level: 80,
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        level: 75,
      },
      {
        name: "Appwrite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg",
        level: 70,
      },
    ],
  },
  {
    name: "State Management",
    icon: Zap,
    skills: [
      {
        name: "Redux Toolkit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        level: 85,
      },
      {
        name: "React Query",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/reactquery.svg",
        level: 80,
      },
      {
        name: "Context API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: 90,
      },
      {
        name: "Zustand",
        icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
        level: 75,
      },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: GitBranch,
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: 90,
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        level: 50,
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        level: 80,
      },
    ],
  },
];

const githubRepo =
  "https://github.com/CodeByKaran/PortFolio/tree/main/Projects";

const projects = [
  {
    id: 1,
    name: "News Application",
    description:
      "A modern news aggregation platform that provides real-time news updates from various sources with customizable categories and search functionality.",
    techStack: ["html", "css", "javascript"],
    features: [
      "Real-time news updates",
      "Category-based filtering",
      "Advanced search functionality",
      "Responsive article layout",
      "Bookmark favorite articles",
    ],
    challenges:
      "Implementing efficient news fetching and caching strategies while maintaining fast load times.",
    image: "/newsapp.svg",
    liveDemo: "",
    github: githubRepo,
    category: "Frontend",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    description:
      "A comprehensive weather application providing detailed weather forecasts, interactive maps, and weather alerts.",
    techStack: ["html", "css", "javascript"],
    features: [
      "Real-time weather updates",
      "5-day weather forecast",
      "Interactive weather maps",
      "Location-based weather",
      "Weather alerts and notifications",
    ],
    challenges:
      "Handling real-time data updates and creating intuitive data visualizations for weather patterns.",
    image: "/wheaterapp.svg",
    liveDemo:
      "https://codebykaran.github.io/PortFolio/Projects/WeatherApp/index.html",
    github: githubRepo,
    category: "Frontend",
  },
  {
    id: 3,
    name: "Puzzle Game",
    description:
      "An engaging puzzle game with multiple difficulty levels, timer challenges, and score tracking.",
    techStack: ["html", "css", "javascript"],
    features: [
      "Multiple puzzle types",
      "Difficulty levels",
      "Score tracking",
      "Timer challenges",
      "Progress saving",
    ],
    challenges:
      "Implementing smooth drag-and-drop functionality and optimizing game performance.",
    image: "/puzzleapp.svg",
    liveDemo:
      "https://codebykaran.github.io/PortFolio/Projects/Memory%20Game/index.html",
    github: githubRepo,
    category: "Frontend",
  },
  {
    id: 4,
    name: "Feedback System",
    description:
      "A comprehensive feedback collection and management system with analytics and reporting features.",
    techStack: ["Next.js", "MongoDB", "Express", "Zod", "TailwindCSS"],
    features: [
      "Custom feedback forms",
      "Real-time analytics",
      "Response management",
      "Export capabilities",
      "User dashboard",
    ],
    challenges:
      "Creating an intuitive form builder and implementing real-time analytics processing.",
    image: "/feedbackapp.svg",
    liveDemo: "",
    github: "https://github.com/CodeByKaran/Feed-message",
    category: "Full Stack",
  },
  {
    id: 5,
    name: "Task Management App",
    description:
      "A streamlined task management application with collaborative features and progress tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    features: [
      "Task organization",
      "Real-time updates",
      "Team collaboration",
      "Progress tracking",
      "Due date reminders",
    ],
    challenges:
      "Implementing real-time updates and ensuring smooth collaboration features.",
    image: "/taskapp.svg",
    liveDemo: "",
    github: "https://github.com/CodeByKaran/NoteApp",
    category: "Full Stack",
  },
  {
    id: 6,
    name: "Chess Game",
    description:
      "An interactive chess game with multiplayer support, move validation, and game analysis features.",
    techStack: ["html", "css", "javascript"],
    features: ["Move validation", "Game analysis", "Interactive UI"],
    challenges:
      "Implementing complex chess logic and ensuring smooth multiplayer experience.",
    image: "/chessapp.svg",
    liveDemo: "https://chess-game-six-cyan.vercel.app/",
    github: "https://github.com/CodeByKaran/ChessGame",
    category: "Frontend",
  },
];

const isOnce = true;

export { profileUrl, navItems, skillCategories, projects, isOnce };
