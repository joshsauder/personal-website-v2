import React, {useState} from "react";
import Slide from "react-reveal";
import PersonalList from "../data/interests.json";
import '../sass/Card.sass'
import ListItem from "./ListItems";
/*
Renders each personal item
list - the personal list item, 
image - the applicable image
*/
const PersonalTab = ({ list }) => {
  return (
    <div className="tab-pane fade show active" id={list.title} role="tabpanel">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 mx-3">
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
        <div className="md:w-1/3 md:mt-0 mt-3">
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
  const [show, setShow] = useState(0);

  return (
    <div id={id}>
      <div className="container">
        <Slide right>
          <div className="bg-white rounded p-6 shadow-lg">
            <h1 className="text-center chewy-font text-3xl">Interests</h1>
            <div className="md:flex mt-4">
              <div className="md:w-1/4">
                <ul className="flex flex-col">
                  {PersonalList.map((item, index) => (
                    <ListItem project={item} idx={index} select={(event) => setShow(event.target.id)} current={show}/> 
                  ))}
                </ul>
              </div>
              <div className="md:w-3/4">
                <div className="tab-content" id="tabContent">
                  <PersonalTab list={PersonalList[show]}/>
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
