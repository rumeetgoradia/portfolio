import React, { useEffect, useRef } from "react"

export default function Sphere({ theme, themeToggled }) {
  const canvas = useRef()
  const ctxRender = useRef()
  const timeout = useRef()
  const requestId = useRef()
  const maxAX = 0.1
  const maxAY = 0.1
  const maxAZ = 0.1
  const startVX = 0.001
  const startVY = 0.001
  const startVZ = 0.001
  const framesToRotate = 1750.0
  const perspective = 400
  const newParticlePerFrame = 5
  const growDuration = 100.0
  const waitDuration = 50.0
  const shrinkDuration = 150.0
  const color = [52, 146, 110]
  const vX = (2.0 * Math.PI) / framesToRotate
  let renderObj = {
    pFirst: null,
  }
  let bufferObj = {
    pFirst: null,
  }
  let radius = 0
  let projSphereX = 0
  let projSphereY = 0
  let angle = 0.0
  let sinAngle = 0.0
  let cosAngle = 0.0
  let width = 0
  let height = 0
  let fillerAlpha = 1.0

  const setSize = () => {
    width = window.innerWidth
    height = window.innerHeight
    projSphereX = width / 2
    projSphereY = height / 2
    radius = Math.min(width, height) / (width < 500 ? 3.15 : 3.65)
    if (canvas.current) {
      canvas.current.width = width
      canvas.current.height = height
    }
  }

  const Particle = function () {
    class Particle {
      init() {
        this.angle = Math.random() * Math.PI * 2
        this.force = Math.acos(randomize())
        this.alpha = 0
        this.isDead = false
        this.framesAlive = 0
        this.x = radius * Math.sin(this.force) * Math.cos(this.angle)
        this.y = radius * Math.sin(this.force) * Math.sin(this.angle)
        this.z = radius * Math.cos(this.force)
        this.vX = startVX * this.x
        this.vY = startVY * this.y
        this.vZ = startVZ * this.z
        this.growDuration = growDuration + randomize() * (growDuration / 4.0)
        this.waitDuration = waitDuration + randomize() * (waitDuration / 4.0)
        this.shrinkDuration =
          shrinkDuration + randomize() * (shrinkDuration / 4.0)
        this.aX = 0.0
        this.aY = 0.0
        this.aZ = 0.0
      }

      update() {
        if (this.framesAlive > this.growDuration + this.waitDuration) {
          this.vX += this.aX + maxAX * randomize()
          this.vY += this.aY + maxAY * randomize()
          this.vZ += this.aZ + maxAZ * randomize()
          this.x += this.vX
          this.y += this.vY
          this.z += this.vZ
        }
        this.rotX = cosAngle * this.x + sinAngle * this.z
        this.rotZ = -sinAngle * this.x + cosAngle * this.z
        this.radiusCurrent = Math.max(
          0.01,
          perspective / (perspective - this.rotZ)
        )
        this.projX = this.rotX * this.radiusCurrent + projSphereX
        this.projY = this.y * this.radiusCurrent + projSphereY
        this.framesAlive += 1
        if (this.framesAlive < this.growDuration) {
          this.alpha = (this.framesAlive * 1.0) / this.growDuration
        } else if (this.framesAlive < this.growDuration + this.waitDuration) {
          this.alpha = 1.0
        } else if (
          this.framesAlive <
          this.growDuration + this.waitDuration + this.shrinkDuration
        ) {
          this.alpha =
            ((this.growDuration +
              this.waitDuration +
              this.shrinkDuration -
              this.framesAlive) *
              1.0) /
            this.shrinkDuration
        } else {
          this.isDead = true
        }
        if (this.isDead === true) {
          swapList(this, renderObj, bufferObj)
        }
        this.alpha *= Math.min(1.0, Math.max(0.5, this.rotZ / radius))
        this.alpha = Math.min(1.0, Math.max(0.0, this.alpha))
      }
    }
    Particle.prototype.x = 0.0
    Particle.prototype.y = 0.0
    Particle.prototype.z = 0.0
    Particle.prototype.vX = 0.0
    Particle.prototype.vY = 0.0
    Particle.prototype.vZ = 0.0
    Particle.prototype.aX = 0.0
    Particle.prototype.aY = 0.0
    Particle.prototype.aZ = 0.0
    Particle.prototype.projX = 0.0
    Particle.prototype.projY = 0.0
    Particle.prototype.rotX = 0.0
    Particle.prototype.rotZ = 0.0
    Particle.prototype.pPrev = null
    Particle.prototype.pNext = null
    Particle.prototype.angle = 0.0
    Particle.prototype.force = 0.0
    Particle.prototype.growDuration = 0.0
    Particle.prototype.waitDuration = 0.0
    Particle.prototype.shrinkDuration = 0.0
    Particle.prototype.radiusCurrent = 0.0
    Particle.prototype.framesAlive = 0.0
    Particle.prototype.isDead = false
    return Particle
  }.call(this)

  const randomize = () => {
    return 2.0 * Math.random() - 1.0
  }

  const render = () => {
    const gradient = ctxRender.current.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, `${theme === "light" ? "#dddde1" : "#111820"}`)
    gradient.addColorStop(0.5, `${theme === "light" ? "#e7e7ea" : "#0e131a"}`)
    gradient.addColorStop(1, `${theme === "light" ? "#f1f1f3" : "#0a0e13"}`)
    ctxRender.current.fillStyle = gradient
    ctxRender.current.fillRect(0, 0, width, height)
    let p = renderObj.pFirst
    while (p !== null) {
      ctxRender.current.fillStyle =
        "rgba(" + color.join(",") + "," + p.alpha.toFixed(4) + ")"
      ctxRender.current.beginPath()
      ctxRender.current.arc(
        p.projX,
        p.projY,
        p.radiusCurrent,
        0,
        2 * Math.PI,
        false
      )
      ctxRender.current.closePath()
      ctxRender.current.fill()
      p = p.pNext
    }
    if (fillerAlpha >= 0 && themeToggled) {
      const fillerGradient = ctxRender.current.createLinearGradient(
        0,
        0,
        width,
        height
      )
      fillerGradient.addColorStop(
        0,
        `${
          theme === "dark"
            ? "rgba(221,221,225," + fillerAlpha + ")"
            : "rgba(17,24,32," + fillerAlpha + ")"
        }`
      )
      fillerGradient.addColorStop(
        0.5,
        `${
          theme === "dark"
            ? "rgba(231,231,234," + fillerAlpha + ")"
            : "rgba(14,19,26," + fillerAlpha + ")"
        }`
      )
      fillerGradient.addColorStop(
        1,
        `${
          theme === "dark"
            ? "rgba(235,235,237," + fillerAlpha + ")"
            : "rgba(10,14,19," + fillerAlpha + ")"
        }`
      )
      ctxRender.current.fillStyle = fillerGradient
      ctxRender.current.fillRect(0, 0, width, height)
      fillerAlpha -= 1 / 18
    }
  }

  const nextFrame = () => {
    angle = (angle + vX) % (2.0 * Math.PI)
    sinAngle = Math.sin(angle)
    cosAngle = Math.cos(angle)
    let addParticle = 0
    let p = null
    let pNext = null
    while (addParticle++ < newParticlePerFrame) {
      p = swapList(bufferObj.pFirst, bufferObj, renderObj)
      p.init()
    }
    p = renderObj.pFirst
    while (p !== null) {
      pNext = p.pNext
      p.update()
      p = pNext
    }
    render()
    return requestAnimFrame(function () {
      return nextFrame()
    })
  }

  const requestAnimFrame = function (fnCallback) {
    let fnAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (fnCallback) {
        timeout.current = setTimeout(() => {
          fnCallback()
        }, 1000 / 60)
      }
    requestId.current = fnAnimFrame(fnCallback)
  }

  const swapList = (p, src, dest) => {
    if (p !== null) {
      // remove p from src
      if (src.pFirst === p) {
        src.pFirst = p.pNext
        if (p.pNext !== null) {
          p.pNext.pPrev = null
        }
      } else {
        p.pPrev.pNext = p.pNext
        if (p.pNext !== null) {
          p.pNext.pPrev = p.pPrev
        }
      }
    } else {
      p = new Particle()
    }
    p.pNext = dest.pFirst
    if (dest.pFirst !== null) {
      dest.pFirst.pPrev = p
    }
    dest.pFirst = p
    p.pPrev = null
    return p
  }

  // const reset = () => {
  //   renderObj = {
  //     pFirst: null,
  //   }
  //   bufferObj = {
  //     pFirst: null,
  //   }
  //   radius = 0
  //   projSphereX = 0
  //   projSphereY = 0
  //   angle = 0.0
  //   sinAngle = 0.0
  //   cosAngle = 0.0
  //   width = 0
  //   height = 0
  // }

  useEffect(() => {
    window.addEventListener("resize", setSize)
    ctxRender.current = canvas.current.getContext("2d")
    setSize()
    nextFrame()
    return () => {
      window.removeEventListener("resize", setSize)
      clearTimeout(timeout.current)
      if (requestId.current) {
        window.cancelAnimationFrame(requestId)
      }
    }
  }, [theme])

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 5,
      }}
    >
      <canvas id="sphere-canvas" ref={canvas}></canvas>
    </div>
  )
}
