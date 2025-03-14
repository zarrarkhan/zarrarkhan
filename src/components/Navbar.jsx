import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#111111] shadow-md">
      <div className="container flex justify-between items-center py-4 px-6">
        {/* No text/logo, just an empty space for balance */}

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white ml-auto">
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#about">About</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#projects">Projects</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#DAA520] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#292929] text-white flex flex-col items-center space-y-4 py-4">
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
