import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      height="100vh"
      width="100vw"
      className="opacity-50"
      options={{
        background: {
          color: {
            value: "rgb(0 0 0 / 0)",
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              factor: 2000,
              area: 2000,
              enable: false,
            },
          },
          links: {
            distance: 150,
            enable: true,
            color: "rgb(0, 86, 66)",
          },
          color: {
            value: "rgb(0, 86, 66)",
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          zIndex: {
            value: {
              max: -1,
              min: -100,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              parallax: {
                enable: true,
                force: 25,
                smooth: 50,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
