import React, { useEffect, useState } from "react";
import logo from "../assets/react.svg";

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
    { link: "FAQ", path: "faq" },
  ];
  return (
    <>
      <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav
          className={`py-4 lg:px-14 px-4 ${
            isSticky
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
                className="w-10 inline-block items-center"
              />
            </a>

            <ul className={`md:flex space-x-12 ${isMenuOpen ? "" : "hidden"}`}>
              {navItems.map(({ link, path }) => (
                <li
                  key={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block text-base text-gray900 hover:text-primaryBlue first:font-medium"
                >
                  <a href={`#${path}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
