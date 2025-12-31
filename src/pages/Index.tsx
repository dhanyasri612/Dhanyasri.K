import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dhanyasri K - AI/ML Engineer & Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Dhanyasri K is an aspiring AI/ML Engineer and Full-Stack Developer specializing in React, Django, and Machine Learning." 
        />
        <meta name="keywords" content="Dhanyasri, AI Engineer, ML Developer, React, Python, TensorFlow, CNN" />
        <link rel="canonical" href="https://dhanyasri.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
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
