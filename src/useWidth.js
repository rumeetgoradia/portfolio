import { useEffect, useState } from "react"

export default function useWidth() {
  const [hasRan, setHasRan] = useState(false)
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (!hasRan) {
      setHasRan(true)
      handleResize()
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return width
}
