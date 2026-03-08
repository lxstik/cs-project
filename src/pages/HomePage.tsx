import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import Weekly from "../components/Weekly";


export default function HomePage() {
  return (
    <div className="bg-[#15191c] color-white h-full">
        <Navbar />
        <MainBanner />
        <Weekly/>
    </div>
  )
}
