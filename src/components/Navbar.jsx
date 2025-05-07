import { useState } from "react";
import { BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md">
      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl font-semibold opacity-80 transition-all duration-300 hover:opacity-100"
      >
        itsBrooke
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        {["home", "tech", "projects", "about", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Social Icons */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-400 hover:opacity-100">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-400 hover:opacity-100">
          <BsGithub />
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {isOpen ? (
          <BiX className="text-4xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <BiMenu className="text-4xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] z-40 h-screen w-1/2 bg-black/90 p-12 flex flex-col gap-10 border-l border-gray-800">
          <ul className="flex flex-col gap-8">
            {["home", "tech", "projects", "about", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={toggleMenu}
                  className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-5 pt-4">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsYoutube />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-400 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-400 hover:opacity-100">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
