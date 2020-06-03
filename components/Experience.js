import React, { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import Slide from "react-reveal/Slide";
import jobModal from "../data/jobModal.json";
import {
  NTIModalData,
  CASModalData,
  OpenDemiaModalData,
  XPOModalData,
} from "../data/modal";
import "../css/About.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
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
      <div className="font-normal flex-1 text-center mt-5" key={index}>
        <FontAwesomeIcon icon={item.icon} size="2x" />
        <h4 className="mt-4">{item.title}</h4>
        <p className="mt-4">{item.company}</p>
        <p>{item.date}</p>
        <button
          className="btn-outline-secondary"
          onClick={() => setModal(item.modal)}
        >
          More Info
        </button>
      </div>
    ));
  };

  return (
    <div id={this.props.id}>
      <ExperienceModal modal={modal === NTI} onHide={() => setModal("")} jobDescription={NTIModalData} index={0} />
      <ExperienceModal modal={modal === OPENDEMIA} onHide={() => setModal("")} jobDescription={OpenDemiaModalData} index={1} />
      <ExperienceModal modal={modal === CAS} onHide={() => setModal("")} jobDescription={CASModalData} index={2}/>
      <ExperienceModal modal={modal === XPO} onHide={() => setModal("")} jobDescription={XPOModalData} index={3}/>
      <div className="container">
          <Slide right>
              <div className="bg-white rounded p-6 shadow-lg">
                  <h1 className="text-center chewy-font">Work Experience</h1>
                  <div className="flex">
                      {populateList(jobModal)}
                  </div>
              </div>
          </Slide>
          <hr className="divide-white"/>
      </div>
  </div>
)

};

export default Experience;