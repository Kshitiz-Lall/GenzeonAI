import React, { useEffect, useState } from "react";
import logo from "../assets/HIP Logo Horizontal.svg";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "Product", path: "product" },
    { link: "About", path: "about" },
    { link: "Try Demo", path: "demo" },
  ];
  return (
    <>
      <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav
          className={`py-4 lg:px-14 px-4 ${isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
            }`}
        >
          <div className="flex justify-between items-center text-base gap-8 px-5">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="inline-block items-center"
              />
            </a>

            <ul className={`md:flex space-x-12 ${isMenuOpen ? "" : "hidden"}`}>
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block text-base text-gray900 hover:text-primaryBlue first:font-medium"
                >
                  <a href={`#${path}`}>{link}</a>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
