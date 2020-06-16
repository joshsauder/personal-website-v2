import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../sass/navbar.sass"

function Navigation() {
  const [scroll, setScroll] = useState(false);
  const navRef = useRef(null);

  //add scroll event listener
  useEffect(() => window.addEventListener("scroll", setScrollPos), [])

  /*
    If position moves, determine if the nav bar should be transparant or not
    */
  const setScrollPos = () => {
    if (window.scrollY > 500 && !scroll && window.screen.width > 576) {
      setScroll(true);
    } else if (window.scrollY < 500 && scroll) {
      setScroll(false);
    }
  };

  const toggleNav = () => navRef.current.classList.toggle("hidden");
  

  return (
    <div className="nav-fixed-top">
      <nav className={`flex items-center chewy-font justify-between flex-wrap p-6 ${scroll ? "bg-darkPurple" : ""}`}>
      
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="text-2xl tracking-tight font-semibold">Josh Sauder</span>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white" onClick={toggleNav}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" ref={navRef}>
          <div className="text-lg lg:flex-grow">
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                activeClass="active"
                to="Home"
                href="#"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                Home
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                activeClass="active"
                to="Experience"
                href="#"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                Experience
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                activeClass="active"
                to="Education"
                href="#"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                Education
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                activeClass="active"
                to="Interests"
                href="#"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                Interests
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                activeClass="active"
                to="Projects"
                href="#"
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
              >
                My Projects
            </Link>
          </div>
        </div>

      </nav>
    </div>
  );
}

export default Navigation;
