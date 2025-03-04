import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function App() {
  const gsapRef = useRef(null);

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

    // Another and preferred way of doing that is by using useRef hook

    gsap.to(gsapRef.current, {
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

  useGSAP(() => {
    gsap.from(".box", {
      y: 300,
      opacity: 0,
      rotate: 360,
      borderRadius: "50%",
      delay: 1,
      duration: 1,
    })
  }, [])

  return (
    <>
      <div className="w-full h-screen p-5 flex items-center justify-evenly gap-3">
        {/* <div ref={gsapRef} className="w-64 h-64 bg-orange-500 border border-black rounded-sm"></div> */}

        <div className="w-40 h-80 border-4 border-black">
          <div className="circle h-40 w-40 rounded-full bg-gradient-to-t from-blue-300 via-blue-500 to-blue-700"></div>
          <div className="box h-40 w-40 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
        </div>
        <div className="w-40 h-80"> {/* Added negative margin */}
          <div className="circle h-40 w-40 rounded-full bg-gradient-to-t from-blue-300 via-blue-500 to-blue-700"></div>
          <div className="box h-40 w-40 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
        </div>
      </div>
    </>
  )
}

export default App
