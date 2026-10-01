import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Visit />
      </main>
      <Footer />
    </MotionConfig>
  );
}
