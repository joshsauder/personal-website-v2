import React from 'react';
import JobList from '../../data/jobModal.json'
import Modal from '../Modal'

/*
Populates each Modal with paragraph items 
*/
function PopulateList(props){
  var experienceList = props.list
  const populatedList = experienceList.map((item, index) =>
    <p key={index} className="mb-2 italic">
      {item}
    </p>
  )
  return populatedList
}

/*
Populates each list 
*/
function PopulateTechList(props){
  var experienceTechList = props.list
  const populatedList = experienceTechList.map((item, index) =>
  <li key={index} className="mb-2 ml-4 italic">
    {item}
  </li>
  )
  return(
    <ul className="list-disc">{populatedList}</ul>
  );
}

const ExperiencePopup = ({modal, onHide, jobDescription, index}) => {

    return (
      <React.Fragment>
        {modal && 
          <Modal close={onHide}>
            <Modal.Title>
              <p className="modal-p">{JobList[index].title}</p>
              <p className="modal-p">{JobList[index].date}</p>
            </Modal.Title>
            <Modal.Body>
              <PopulateList list={jobDescription[0]} />
              <PopulateTechList list={jobDescription[1]} />
            </Modal.Body>
          </Modal>
        }
      </React.Fragment>
    );
}

export default ExperiencePopup;
