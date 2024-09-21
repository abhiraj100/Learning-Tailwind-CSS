import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto w-full ">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
