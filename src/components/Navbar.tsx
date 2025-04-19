import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Anasayfa", path: "/" },
  { name: "Hakkımda", path: "/about" },
  { name: "Projelerim", path: "/projects" },
  { name: "Yazılarım", path: "/essays" },
  { name: "Denemelerim", path: "/articles" },
  { name: "İletişim", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (

      <nav className="sticky top-0 z-50 bg-white/89 backdrop-blur-md shadow-sm">
        <div
            className="absolute top-0 left-0 w-full h-full animate-gradient bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300 bg-[length:400%_400%] -z-10"
        />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-1xl font-extrabold text-gray-800 tracking-tight">
              Muhyet<span className="text-blue-600">.dev</span>
            </div>

            {/* Masaüstü Menü */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                            isActive
                                ? "bg-blue-300 text-white font-semibold shadow"
                                : "text-gray-700 hover:text-blue-600 hover:underline"
                        }`}
                    >
                      {item.name}
                    </Link>
                );
              })}
            </div>

            {/* Mobil Menü Butonu */}
            <div className="md:hidden">
              <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="text-gray-700 hover:text-blue-600 transition"
                  aria-label="Menüyü Aç/Kapat"
              >
                {menuOpen ? <X size={24}/> : <Menu size={24}/>}
              </button>
            </div>
          </div>

          {/* Mobil Menü İçeriği (animasyonlu) */}
          {menuOpen && (
              <div className="md:hidden mt-2 pb-4 space-y-2 animate-fadeIn">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                      <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                              isActive
                                  ? "bg-blue-300 text-white font-semibold shadow"
                                  : "text-gray-700 hover:bg-blue-100"
                          }`}
                      >
                        {item.name}
                      </Link>
                  );
                })}
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
