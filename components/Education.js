import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import ExperienceModal from "./ExperienceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationList from "../data/education.json";
import { OSUModalData } from "../data/jobModal.json";

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props) {
  const populatedList = props.list.map((item, index) => (
    <div className="lead col-md-4 text-center mt-4" key={index}>
      <FontAwesomeIcon icon={item.icon} size="2x" />
      <h4 className="mt-4 mb-4">{item.title}</h4>
      {item.description.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </div>
  ));
  return populatedList;
}

function Education({ id }) {
  const [OSUModal, setOSUModal] = useState(false);

  let OSUClose = () => setOSUModal(false);

  return (
    <div id={id}>
      {/* Index based on location in JSON */}
      <ExperienceModal
        modal={OSUModal}
        onHide={OSUClose}
        jobDescription={OSUModalData}
        index={4}
      />
      <div className="bg-white rounded p-6 shadow-lg">
        <Slide left>
          <div className="shadow-lg">
            <h1 className="text-center chewy-font">Education</h1>
            <div className="featurette row">
              <PopulateList list={EducationList} />
            </div>
            <div className="row justify-content-center">
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
        <hr className="featurette-divider" />
      </div>
    </div>
  );
}

export default Education;
