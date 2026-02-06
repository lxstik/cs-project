import Navbar from "./components/Navbar"
import MainBanner from "./components/MainBanner"
import Weekly from "./components/Weekly"

function App() {
  return (
    <>
      <div className="bg-[#15191c] color-white h-full">
        <Navbar />
        <MainBanner />
        <Weekly/>
      </div>

    </>
  )
}

export default App
