import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Tech     from "./components/Tech";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import About    from "./components/About";
import Footer   from "./components/Footer";



function App() {
  
  return <> 

    <div className="relative min-h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>

  </>
  
}

export default App
