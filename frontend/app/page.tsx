import MePage from "../src/component/portfolio/me";
import Projects from "../src/component/portfolio/project";
import Skills from "../src/component/portfolio/skill";
import Contacts from "../src/component/portfolio/contact";
import Footer from "../src/component/layout/Footer";
import Header from "../src/component/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <MePage />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}