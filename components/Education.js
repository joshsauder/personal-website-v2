import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import ExperienceModal from "./EducationModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationList from "../data/education.json";
import { OSUModalData } from "../data/jobData";

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props) {
  const populatedList = props.list.map((item, index) => (
    <div className="lead col-md-4 text-center mt-4" key={index}>
      <FontAwesomeIcon icon={item.icon} size="2x" />
      <h4 className="font-normal text-xl" className="mt-4 mb-4 text-2xl font-bold">{item.title}</h4>
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
      <div className="container">
        <Slide left>
          <div className="shadow-lg bg-white rounded p-6">
            <h1 className="text-center chewy-font text-3xl">Education</h1>
            <div className="featurette flex">
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
