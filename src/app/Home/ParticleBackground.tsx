import { useMemo } from "react";
import Particles, {
  ParticlesProvider,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesInit = async (
  engine: Parameters<typeof loadSlim>[0],
) => {
  await loadSlim(engine);
};

export default function ParticleBackground() {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },

      fpsLimit: 500,

      detectRetina: true,


      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },

          resize: {
            enable: true,
          },
        },

        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
            speed: 1.5,
          },
        },
      },

      particles: {
        number: {
          value: 150,
        },

        color: {
          value: "#72ddf7",
        },

        shape: {
          type: ["circle", "square"],
        },

        opacity: {
          value: {
            min: 0.2,
            max: 0.8,
          },
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },

        links: {
          enable: true,
          distance: 110,
          color: "#72ddf7",
          opacity: 0.22,
          width: 1,
        },

        move: {
          enable: true,
          speed: {
            min: 0.3,
            max: 1.2,
          },

          direction: "none",
          random: true,
          straight: false,

          outModes: {
            default: "bounce",
          },
        },

        collisions: {
          enable: true,
        },
      },
    }),
    [],
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="kmstreamx-particles"
        options={options}
        className="absolute inset-0 h-full w-full"
      />
    </ParticlesProvider>
  );
}