import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);
function App() {
  const boxRef = useRef();

  useGSAP(() => {
    // gsap.to("#box", {
    //   x: 500,
    //   y: 300,
    //   duration: 1,
    //   delay: 0.5,
    //   rotate: 360,
    //   yoyo: true,
    //   repeat: 2,
    //   opacity: 1,
    //   borderRadius: "50%"
    // })

    gsap.to(boxRef.current, {
      x: 500,
      y: 300,
      duration: 1,
      delay: 0.5,
      rotate: 360,
      yoyo: true,
      repeat: 2,
      opacity: 1,
      borderRadius: "50%",
      textAlign: "center"
    })
  })
  // .current is a property that returns the latest value of the
  // ref, which is the actual DOM node. It's also the default
  // value, so you can use the ref directly without using
  // .current.

  return (
    <main className="h-[100vh] w-[100vw] bg-neutral-900 p-5">
      {/* <div
        ref={boxRef}
        id="box"
        className="h-80 w-80 bg-red-500 rounded-2xl flex justify-center items-center"
      >Hello</div> */}

      <div id="container">
        <div id="circle">
          <div id="box"></div>
        </div>
      </div>

      <div id="kuck">
        <div id="circle"></div>
      </div>

    </main>
  )
}

export default App
