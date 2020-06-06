import React, { useState } from "react";
import "../App.css";
import "../styles/About.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import JobList from "../data/jobModal.json";

/*
Populates each Modal with paragraph items 
*/
function PopulateList(props) {
  var experienceList = props.list;
  const populatedList = experienceList.map((item, index) => (
    <p key={index}>{item}</p>
  ));
  return populatedList;
}

/*
Populates each list 
*/
function PopulateTechList(props) {
  var experienceTechList = props.list;
  const populatedList = experienceTechList.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return <ul>{populatedList}</ul>;
}

const ExperienceModal = ({ modal, index, jobDescription, onHide }) => {
  const [ExperienceShow, setExperienceShow] = useState(modal);

  return (
    <Modal show={ExperienceShow} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className="modal-p">{JobList[index].title}</p>
          <p className="modal-p">{JobList[index].date}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PopulateList list={jobDescription[0]} />
        <PopulateTechList list={jobDescription[1]} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          onClick={onHide}
          title="Close pop-up window"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
