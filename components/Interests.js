import React, {useState} from "react";
import Slide from "react-reveal";
import PersonalList from "../data/interests.json";
import OSUPic from "../images/OSU.png";
import BeachPic from "../images/Beach.png";
import RunningPic from "../images/Running.png";
import SpecialOlympics from "../images/SpecialOlympics.png";

/*
Renders each personal item
list - the personal list item, 
image - the applicable image
*/
const PersonalTab = ({ list, image }) => {
  return (
    <div className="tab-pane fade show active" id={list.title} role="tabpanel">
      <div className="flex">
        <div className="w-2/3">
          <div className="font-normal text-xl">{list.description}</div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-3">
            <div className="px-6 py-4">
                <div className="font-bold chewy-font text-center text-xl mb-2">
                Fun Fact
                </div>
                {list.funFact.map((item, index) => (
                <div className="font-normal" key={index}>
                    {item}
                </div>
            ))}
          </div>
        </div>
        </div>
        <div className="w-1/3">
          <div className="featurette-img-align">
            <img
              className="featurette-image img-fluid mx-auto rounded"
              alt="Logo"
              src=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Interests({ id }) {
  const [show, setShow] = useState("Running");

  let interest;
  //Show the personal item selected
  if (show === "Running") {
    interest = <PersonalTab list={PersonalList[0]} image={RunningPic} />;
  } else if (show === "Ohio State Football") {
    interest = <PersonalTab list={PersonalList[1]} image={OSUPic} />;
  } else if (show === "Volunteer Work") {
    interest = <PersonalTab list={PersonalList[2]} image={SpecialOlympics} />;
  } else if (show === "Travel") {
    interest = <PersonalTab list={PersonalList[3]} image={BeachPic} />;
  }

  return (
    <div id={id}>
      <div className="container">
        <Slide right>
          <div className="bg-white rounded p-6 shadow-lg">
            <h1 className="text-center chewy-font text-3xl">Interests</h1>
            <div className="flex">
              <div className="w-1/4">
                <ul className="flex flex-col">
                  {PersonalList.map((item) => (
                    <li className="flex-1 mr-2">
                        <a
                        eventKey={item.title}
                        key={item.title}
                        className="text-center block rounded py-2 px-4 navNotActive"
                        onSelect={(selectedKey) => setShow(`${selectedKey}`)}
                        >
                        {item.title}
                        </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-3/4">
                <div className="tab-content" id="tabContent">
                  {interest}
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <hr className="divider" />
      </div>
    </div>
  );
}

export default Interests;
