import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  
  // Use resolvedTheme to handle "system" setting correctly
  const currentTheme = resolvedTheme || theme;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.8,
            size: 15,
            color: currentTheme === "dark" ? "#14b8a6" : "#0d9488", // Teal color
          },
        },
      },
      particles: {
        color: {
          value: currentTheme === "dark" 
            ? ["#14b8a6", "#0ea5e9", "#8b5cf6"] // Dark theme: Teal, Sky, Violet
            : ["#0d9488", "#0284c7", "#7c3aed"], // Light theme: Deeper Teal, Sky, Violet for contrast
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: { min: 0.4, max: 1.2 },
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: currentTheme === "dark" ? { min: 0.1, max: 0.3 } : { min: 0.2, max: 0.5 },
        },
        shape: {
          type: "char",
          options: {
            char: [
              { value: "{", font: "monospace", style: "", weight: "400" },
              { value: "}", font: "monospace", style: "", weight: "400" },
              { value: "=>", font: "monospace", style: "", weight: "400" },
              { value: "</>", font: "monospace", style: "", weight: "400" },
              { value: "( )", font: "monospace", style: "", weight: "400" },
              { value: "AI", font: "monospace", style: "", weight: "700" },
              { value: "ML", font: "monospace", style: "", weight: "700" },
              { value: "&&", font: "monospace", style: "", weight: "400" },
              { value: "[ ]", font: "monospace", style: "", weight: "400" },
              { value: "const", font: "monospace", style: "", weight: "400" },
            ],
          },
        },
        size: {
          value: { min: 8, max: 14 },
        },
      },
      detectRetina: true,
    }),
    [currentTheme],
  );

  if (init) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0 transition-opacity duration-500"
        />
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
      </div>
    );
  }

  return null;
};


export default ParticlesBackground;
