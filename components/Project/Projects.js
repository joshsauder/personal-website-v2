import React, { useState } from "react";
import ListItems from "../ListItems";
import Slide from "react-reveal/Slide";
//import ContactForm from "./ContactForm";
import ProjectList from "../../data/projects.json";
import ProjectDetails from "./ProjectDetails";

const Projects = ({ id }) => {
  const [show, setShow] = useState("In The Clear iOS App");

 
  
  let project;
  //Render the selected project
  
    if(show === "In The Clear Web"){
      project = ProjectList[0].items[1]
    } else if(show === "In The Clear Home Page"){
      project = ProjectList[0].items[2]
    } else if(show === "Path Finding Visualizer"){
      project = ProjectList[1].items[0]
    } else if(show === "Personal Website"){
      project = ProjectList[2].items[0]
    } else {
      project = ProjectList[0].items[0]
    }

  return (
    <div id={id} className="md:mb-48 mb-24">
      {/*<ContactForm modal={modal} onHide={() => setModal(false)} title={title} alert={alert} onClose={modalClose}/> */}
      <div className="container">
        <Slide left>
            <div className="bg-white rounded p-6 shadow-lg">
            <h1 className="text-center chewy-font text-3xl">Projects</h1>
            <div className="md:flex mt-4">
              <div className="md:w-1/4">
                <ul className="flex flex-col">
                  {ProjectList.map((project) => (
                    <ListItems project={project} idx={project.title} select = {(event) => setShow(`${event.target.id}`)} current={show} />
                  ))}
                </ul>
              </div>
              <div className="md:w-3/4">
                <ProjectDetails list={project}/>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
