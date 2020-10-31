import React from "react";
import Modal from "../Modal";
import JobList from "../../data/jobModal.json";

/*
Populates each Modal with paragraph items 
*/
function PopulateList(props) {
  var experienceList = props.list;
  const populatedList = experienceList.map((item, index) => (
    <p key={index} className="mb-2">{item}</p>
  ));
  return populatedList;
}

/*
Populates each list 
*/
function PopulateTechList(props) {
  var experienceTechList = props.list;
  const populatedList = experienceTechList.map((item, index) => (
    <li key={index} className="mb-2">{item}</li>
  ));
  return <ul>{populatedList}</ul>;
}

const ExperienceModal = ({ modal, index, jobDescription, onHide }) => {

  return (
    <React.Fragment>
        {modal &&
            <Modal close={onHide}>
                <Modal.Title>
                <p>{JobList[index].title}</p>
                <p>{JobList[index].date}</p>
                </Modal.Title>
                <Modal.Body>
                    <PopulateList list={jobDescription[0]} />
                    <PopulateTechList list={jobDescription[1]} />
                </Modal.Body>
            </Modal>
        }
    </React.Fragment>
  );
};

export default ExperienceModal;
