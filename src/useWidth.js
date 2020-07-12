import { useEffect, useState } from "react"

export default function useWidth() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  return width
}
