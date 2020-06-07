import React, { useState } from "react";
import ListItems from "./ListItems";
import Slide from "react-reveal/Slide";
//import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectList from "../data/projects.json";

const Projects = ({ id }) => {
  const [show, setShow] = useState("In The Clear iOS App");

  /*
  Renders each project
  list - project list from ProjectList
  logo - applicable image
  */
  const renderProject = (list) => {
    return (
      <div className="tab-pane fade show active" id={list.name} role="tabpanel">
        <div className="flex">
          <div className="w-2/3">
            <div className="font-normal text-xl">{list.description}</div>
            <div className="font-normal text-xl mt-3">{list.techStack}</div>
            <div className="mt-3 container flex items-start">
              <button
                className="mr-2 mb-2 btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={list.github}
              >
                <FontAwesomeIcon className="github" icon={["fab", "github"]} />{" "}
                Github Repo
              </button>
              <button
                className="mr-2 mb-2 btn-outline-secondary"
                onClick={() => console.log("Needs to be implemented")}
                title={"Give Feedback on" + list.name}
              >
                Feedback
              </button>
              {list.project && (
                <React.Fragment>
                  <button
                    className="mr-2 mb-2 btn-outline-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={list.project}
                  >
                    Website
                  </button>
                  {list.article && (
                    <button
                      className="mb-2 btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={list.article}
                    >
                      <FontAwesomeIcon
                        className="github"
                        icon={["fab", "medium"]}
                      />{" "}
                      Article
                    </button>
                  )}
                </React.Fragment>
              )}
              {list.appStore && (
                <div className="mb-2">
                  <a
                    href={list.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Link to In The Clear's App Store page"
                    className="mr-3"
                  >
                    <img alt="App Store Link" src="/appStore.svg"></img>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/3 mt-2">
            <div className="featurette-img-align">
              <img
                className="featurette-image img-fluid mx-auto rounded"
                alt="Logo"
                src={list.image}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  };

  let project;
  //Render the selected project
  if (show === "In The Clear" || show === "In The Clear iOS App") {
    project = renderProject(ProjectList[0].items[0]);
  } else if (show === "In The Clear Web") {
    project = renderProject(ProjectList[0].items[1]);
  } else if (show === "In The Clear Home Page") {
    project = renderProject(ProjectList[0].items[2]);
  } else if (show === "Path Finding Visualizer") {
    project = renderProject(ProjectList[1].items[0]);
  } else if (show === "Personal Website") {
    project = renderProject(ProjectList[2].items[0]);
  }

  return (
    <div id={id}>
      {/*<ContactForm modal={modal} onHide={() => setModal(false)} title={title} alert={alert} onClose={modalClose}/> */}
      <div className="container">
        <Slide left>
            <div className="bg-white rounded p-6 shadow-lg">
            <h1 className="text-center chewy-font text-3xl">Projects</h1>
            <div className="flex">
              <div className="w-1/4">
                <ul className="flex flex-col">
                  {ProjectList.map((project) => (
                    <ListItems project={project} key={project.title} select = {(event) => setShow(`${event.target.id}`)} current={show} />
                  ))}
                </ul>
              </div>
              <div className="w-3/4">
                <div className="tab-content" id="tabContent">
                  {project}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </Slide>
        <div className="featurette-divider" />
      </div>
    </div>
  );
};

export default Projects;
