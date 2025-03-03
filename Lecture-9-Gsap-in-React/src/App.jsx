import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function App() {
  useGSAP(() => {
    gsap.to(".bg-orange-500", {
      x: 800,
      y: 300,
      delay: 1,
      duration: 1.5,
      opacity: 1,
      borderRadius: "50%",
      scale: 2,
      yoyo: true,
      repeat: 5,
      ease: "power3.out",
    })
  }, [])
  return (
    <>
      <div className="w-full h-full ">
        <div className="w-64 h-64 bg-orange-500 border border-black rounded-sm"></div>
      </div>
    </>
  )
}

export default App
