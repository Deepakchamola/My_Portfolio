import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Tech from "./components/Tech";
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

const App = () => {

  return (
    <>
    <div className="fixed -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

    <div className="flex flex-col items-center px-4 md:px-5 lg:px-10 select-none overflow-hidden overflow-y-auto">
      <Nav />
      <Hero />
      <Tech />
      <Projects />
      <Contacts />
    </div>
  </>
  );
}

export default App;
