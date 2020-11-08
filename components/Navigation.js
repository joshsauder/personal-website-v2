import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../sass/navbar.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [expanded, setExpanded] = useState(false)
  const navRef = useRef(null);
  

  //add scroll event listener
  useEffect(() => window.addEventListener("scroll", setScrollPos), [])
  useEffect(() => navRef.current.classList.toggle("hidden"), [])
  useEffect(() => setScrollPos(), [expanded])

  /*
    If position moves, determine if the nav bar should be transparant or not
    */
  const setScrollPos = () => {
    if (window.scrollY > 100 || expanded) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const toggleNav = () => { 
    navRef.current.classList.toggle("hidden");
    setExpanded(!expanded)
  }
  

  return (
    <div className="nav-fixed-top">
      <nav className={`flex items-center chewy-font justify-between flex-wrap p-6 ${scroll ? "bg-darkPurple" : ""}`}>
      
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="text-2xl tracking-tight font-semibold">Josh Sauder</span>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-purple-200 border-purple-400 hover:text-white" onClick={toggleNav}>
            <FontAwesomeIcon icon={"align-right"} />
          </button>
        </div>
      
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" ref={navRef}>
          <div className="text-lg lg:flex-grow">
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-opacity-75"
                activeClass="text-opacity-100"
                to="Home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
              >
                Home
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-opacity-75"
                activeClass="text-opacity-100"
                to="Experience"
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
              >
                Experience
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-opacity-75"
                activeClass="text-opacity-100"
                to="Education"
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
              >
                Education
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-opacity-75"
                activeClass="text-opacity-100"
                to="Interests"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                Interests
            </Link>
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-opacity-75"
                activeClass="text-opacity-100"
                to="Projects"
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
