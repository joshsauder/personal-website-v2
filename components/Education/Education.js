import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import EducationModal from "./EducationModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationList from "../../data/education.json";
import { OSUModalData } from "../../data/jobData";

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props) {
  const populatedList = props.list.map((item, index) => (
    <React.Fragment key={index}>
        <div className="text-center" key={index}>
            <FontAwesomeIcon icon={item.icon} size="2x" />
            <h4 className="font-bold text-2xl">{item.title}</h4>
        </div>
        <div className="md:row-span-2 mt-2 md:mb-0 mb-12">
        {item.description.map((description, index) => (
            <p className="font-normal text-xl" key={index}>{description}</p>
        ))}
        </div>
    </React.Fragment>
  ));
  return populatedList;
}

function Education({ id }) {
  const [OSUModal, setOSUModal] = useState(false);

  let OSUClose = () => setOSUModal(false);

  return (
    <div id={id}>
      {/* Index based on location in JSON */}
      <EducationModal
        modal={OSUModal}
        onHide={OSUClose}
        jobDescription={OSUModalData}
        index={5}
      />
      <div className="container">
        <Slide left>
          <div className="shadow-lg bg-white rounded p-6">
            <h1 className="text-center chewy-font text-3xl">Education</h1>
            <div className="grid md:grid-rows-3 md:grid-flow-col grid-flow-row col-gap-6 text-center mb-2 mt-4">
              <PopulateList list={EducationList} />
            </div>
            <div className="flex justify-center">
              <button
                className="btn-outline-secondary"
                onClick={() => {
                  setOSUModal(true);
                }}
              >
                Want to know more about my time at OSU?
              </button>
            </div>
          </div>
        </Slide>
      </div>
      <hr className="divider" />
    </div>
  );
}

export default Education;
