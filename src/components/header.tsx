import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="sticky top-0 z-50">
        <div className="mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="QuizLogo" className="h-8 w-8" />
            <span className="font-bold text-xl text-primary-pink text-shadow-lg">QuizMaster</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-gray-700 text-shadow-lg hover:text-primary-pink">
              Home
            </Link>
            <Link to="/" className="text-gray-700 text-shadow-lg hover:text-primary-pink">
              Results
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-shadow-lg text-gray-700 hover:text-primary-pink">
                Profile <FaChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-40  bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="/" className="block px-4 py-2  hover:bg-gray-100">
                  View Profile
                </Link>
                <p className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </p>
              </div>
            </div>
          </nav>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4">
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-primary-pink"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-primary-pink"
            >
              Results
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-primary-pink"
            >
              Profile
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
