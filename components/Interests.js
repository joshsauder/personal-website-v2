import React, {useState} from "react";
import Slide from "react-reveal";
import PersonalList from "../data/interests.json";
import '../sass/Card.sass'
/*
Renders each personal item
list - the personal list item, 
image - the applicable image
*/
const PersonalTab = ({ list }) => {
  return (
    <div className="tab-pane fade show active" id={list.title} role="tabpanel">
      <div className="flex">
        <div className="w-2/3 mx-3">
          <div className="font-normal text-xl mb-3">{list.description}</div>
          <div className="rounded overflow-hidden shadow-lg purpleBackground">
            <div className="px-6 py-4">
                <div className="font-bold chewy-font text-center text-2xl mb-2">
                Fun Fact
                </div>
                {list.funFact.map((item, index) => (
                <div className="font-normal text-xl" key={index}>
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
              src={list.image}
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
    interest = <PersonalTab list={PersonalList[0]} />;
  } else if (show === "Ohio State Football") {
    interest = <PersonalTab list={PersonalList[1]} />;
  } else if (show === "Volunteer Work") {
    interest = <PersonalTab list={PersonalList[2]}  />;
  } else if (show === "Travel") {
    interest = <PersonalTab list={PersonalList[3]} />;
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
                    <li className="flex-1 mr-2" key={item.title}>
                        <button
                            id={item.title}
                            className={`w-11/12 text-left block rounded py-2 px-4 navNotActive ${show === item.title && "navActive"}`}
                            onClick={(event) => setShow(event.target.id)}
                        >
                        {item.title}
                        </button>
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
