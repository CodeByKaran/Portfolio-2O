import HomePage from "@/page/Home";
import About from "@/page/About";
import Contacts from "@/page/Contacts";
import Projects from "@/page/Projects";

export default function Home() {
  return (
    <main className="font-poppins">
      <HomePage />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
