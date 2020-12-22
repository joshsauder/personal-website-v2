import React, { useState } from "react";
import ExperiencePopup from "./ExperiencePopup";
import Slide from "react-reveal/Slide";
import jobModal from "../../data/jobModal.json";
import {
  AmwellModalData,
  MinderaModalData,
  NTIModalData,
  OpenDemiaModalData,
} from "../../data/jobData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = ({id}) => {
  const [modal, setModal] = useState("")
  //modal constants
  const AMWELL = "AmwellModal"
  const MINDERA = "MinderaModal"
  const OPENDEMIA = "ODModal"
  const NTI = "NTIModal"

  /*
    Renders each experience item
    list - given list item from jobModal
    */
  const populateList = (list) => {
    return list.slice(0, 4).map((item, index) => (
      <div className="md:flex-1 md:mt-0 mt-12 text-center mx-4" key={index}>
        <FontAwesomeIcon icon={item.icon} size="3x"/>
        <h4 className="md:mt-4 mt-2 font-bold text-2xl">{item.title}</h4>
        <p className="md:mt-4 mt-2 font-normal text-xl">{item.company}</p>
        <p className="md:mt-4 mt-2 font-normal text-xl">{item.date}</p>
        <button
          className="btn-outline-secondary md:mt-4 mt-2"
          onClick={() => setModal(item.modal)}
        >
          More Info
        </button>
      </div>
    ));
  };

  const closeModal = () => setModal("")

  return (
    <div id={id}>
      <ExperiencePopup modal={modal === AMWELL} onHide={closeModal} jobDescription={AmwellModalData} index={0} />
      <ExperiencePopup modal={modal === OPENDEMIA} onHide={closeModal} jobDescription={OpenDemiaModalData} index={1} />
      <ExperiencePopup modal={modal === MINDERA} onHide={closeModal} jobDescription={MinderaModalData} index={2} />
      <ExperiencePopup modal={modal === NTI} onHide={closeModal} jobDescription={NTIModalData} index={3} />
      <div className="container">
          <Slide right>
              <div className="bg-white rounded p-6 shadow-lg">
                  <h1 className="text-center chewy-font text-3xl">Work Experience</h1>
                  <div className="md:flex mt-4">
                      {populateList(jobModal)}
                  </div>
              </div>
          </Slide>
      </div>
      <hr className="divider" />
  </div>
)

};

export default Experience;
