import { useState } from "react"

function App() {
  let [color, setColor] = useState("bg-black");

  return (
    <div className={`w-screen h-screen duration-200 ${color}`}>

      <div className=" fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center ">
        <div className=" flex flex-wrap jusify-center gap-3 rounded-3xl  shadow-lg px-3 py-2 bg-[#9bc3cf]">
          <button className={`outline-none px-4 py-1 bg-red-700`} onClick={() => setColor("bg-red-700")}> Red </button>
          <button className={`outline-none px-4 py-1 bg-blue-700`} onClick={() => setColor("bg-blue-700")}> Blue</button>
          <button className={`outline-none px-4 py-1 bg-green-600`} onClick={() => setColor(" bg-green-600")} > Green </button>
          <button className={`outline-none px-4 py-1 bg-yellow-400`} onClick={() => setColor(" bg-yellow-400")}> Yellow </button>
          <button className={`outline-none px-4 py-1 bg-gray-600`} onClick={() => setColor(" bg-gray-600")}> Gray </button>
          <button className={`outline-none px-4 py-1  bg-gradient-to-r from-purple-500 to-pink-500`} onClick={() => setColor("  bg-gradient-to-r from-purple-500 to-pink-500")}> Pink Gradient </button>
          <button className={`outline-none px-4 py-1  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...`} onClick={() => setColor("  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...")}> Green Gradient </button>
        </div>
      </div>
    </div >
  )
}

export default App
