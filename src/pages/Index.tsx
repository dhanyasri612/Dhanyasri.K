import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>John Doe | Creative Developer & Designer</title>
        <meta 
          name="description" 
          content="Creative developer and designer crafting beautiful digital experiences. Specializing in React, TypeScript, and modern web technologies." 
        />
        <meta name="keywords" content="web developer, designer, portfolio, React, TypeScript, frontend developer" />
        <link rel="canonical" href="https://johndoe.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
