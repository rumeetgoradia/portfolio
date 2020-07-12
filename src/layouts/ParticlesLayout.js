import React, { memo, useEffect } from "react"
import Particles from "react-tsparticles"

function ParticlesLayout({ children, setThemeToggled }) {
  useEffect(() => {
    setThemeToggled(false)
  }, [setThemeToggled])

  return (
    <>
      <Particles
        style={{
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 5,
          backgroundColor: "transparent",
        }}
        params={{
          background: {
            color: {
              value: "transparent",
            },
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          backgroundMask: {
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 0,
            },
            enable: false,
          },
          detectRetina: true,
          fpsLimit: 60,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onDiv: {
                ids: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 30,
                  smooth: 20,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 125,
                duration: 0.4,
                speed: 0.5,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
            },
          },
          particles: {
            collisions: {
              enable: false,
              mode: "bounce",
            },
            color: {
              value: "#34926E",
              animation: {
                enable: false,
                speed: 20,
                sync: true,
              },
            },
            links: {
              blink: false,
              color: {
                value: "#34926E",
              },
              consent: true,
              distance: 100,
              enable: true,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "lime",
                },
                enable: false,
              },
              triangles: {
                enable: false,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: 90,
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              direction: "none",
              enable: true,
              noise: {
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              outMode: "out",
              random: false,
              speed: 1,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
                factor: 1000,
              },
              limit: 0,
              value: 85,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.6,
                speed: 0.25,
                sync: false,
              },
              random: {
                enable: false,
                minimumValue: 1,
              },
              value: 0.9,
            },
            rotate: {
              animation: {
                enable: false,
                speed: 1,
                sync: false,
              },
              direction: "clockwise",
              random: false,
              value: 0,
            },
            shadow: {
              blur: 0,
              color: {
                value: "#000000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {
                polygon: {
                  nb_sides: 5,
                },
                star: {
                  nb_sides: 5,
                },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
                images: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              type: "circle",
            },
            size: {
              animation: {
                destroy: "none",
                enable: true,
                minimumValue: 2,
                speed: 10,
                startValue: "max",
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: 5,
            },
            stroke: {
              color: {
                value: "#ff0000",
              },
              width: 0,
              opacity: 1,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          pauseOnBlur: true,
        }}
      />
      {children}
    </>
  )
}

export default memo(ParticlesLayout)
