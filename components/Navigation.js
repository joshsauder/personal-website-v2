import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../css/navbar.sass"

function Navigation() {
  const [scroll, setScroll] = useState(false);

  //add scroll event listener
  useEffect(() => window.addEventListener("scroll", setScrollPos), [])

  /*
    If position moves, determine if the nav bar should be transparant or not
    */
  const setScrollPos = () => {
    if (window.scrollY > 500 && !scroll) {
      setScroll(true);
    } else if (window.scrollY < 500 && scroll) {
      setScroll(false);
    }
  };

  return (
    <div className="nav-fixed-top">
      <nav className={"flex items-center justify-between flex-wrap p-6" + scroll || window.screen.width < 576 ? "bg-darkPurple" : ""}>
      
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <h4 className="chewy-font">Josh Sauder</h4>
        </div>
      
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                activeClass="active"
                to="Education"
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
