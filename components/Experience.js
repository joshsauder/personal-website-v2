import React, { useState } from "react";
import ExperiencePopup from "./ExperiencePopup";
import Slide from "react-reveal/Slide";
import jobModal from "../data/jobModal.json";
import {
  NTIModalData,
  CASModalData,
  OpenDemiaModalData,
  XPOModalData,
} from "../data/jobData";
import "../css/About.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = ({id}) => {
  const [modal, setModal] = useState("")
  //modal constants
  const NTI = "NTI"
  const OPENDEMIA = "OD"
  const CAS = "CAS"
  const XPO = "XPO"

  /*
    Renders each experience item
    list - given list item from jobModal
    */
  const populateList = (list) => {
    return list.slice(0, 4).map((item, index) => (
      <div className="flex-1 text-center mt-5 mx-4" key={index}>
        <FontAwesomeIcon icon={item.icon} size="3x"/>
        <h4 className="mt-4 font-bold text-2xl">{item.title}</h4>
        <p className="mt-4 font-normal text-xl">{item.company}</p>
        <p className="mt-4 font-normal text-xl">{item.date}</p>
        <button
          className="btn-outline-secondary mt-4"
          onClick={() => setModal(item.modal)}
        >
          More Info
        </button>
      </div>
    ));
  };

  return (
    <div id={id}>
      <ExperiencePopup modal={modal === NTI} onHide={() => setModal("")} jobDescription={NTIModalData} index={0} />
      <ExperiencePopup modal={modal === OPENDEMIA} onHide={() => setModal("")} jobDescription={OpenDemiaModalData} index={1} />
      <ExperiencePopup modal={modal === CAS} onHide={() => setModal("")} jobDescription={CASModalData} index={2}/>
      <ExperiencePopup modal={modal === XPO} onHide={() => setModal("")} jobDescription={XPOModalData} index={3}/>
      <div className="container">
          <Slide right>
              <div className="bg-white rounded p-6 shadow-lg">
                  <h1 className="text-center chewy-font text-3xl">Work Experience</h1>
                  <div className="flex">
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
