import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        {/* Section Divider */}
        <div className="w-3/4 mx-auto border-t border-gray-600 mt-10 mb-0"></div>
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
