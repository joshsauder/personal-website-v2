import React, { useState } from "react";
import ListItems from "./ListItems";
import Slide from "react-reveal/Slide";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectList from "../data/projects.json";

const Projects = ({ id }) => {
  const [show, setShow] = useState("InTheClear");
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [alert, setAlert] = useState(false);

  const updateState = (modal, title, alert) => {
      setModal(modal)
      setTitle(title)
      setAlert(alert)
  }

  /*
  Renders each project
  list - project list from ProjectList
  logo - applicable image
  */
  const renderProject = (list) => {
    return (
      <div className="tab-pane fade show active" id={list.name} role="tabpanel">
        <div className="row">
          <div className="col-lg-8">
            <div className="lead">{list.description}</div>
            <div className="lead mt-3">{list.techStack}</div>
            <div className="mt-3 container row">
              <Button
                variant="outline-secondary"
                className="mr-2 mb-2"
                target="_blank"
                rel="noopener noreferrer"
                href={list.github}
              >
                <FontAwesomeIcon className="github" icon={["fab", "github"]} />{" "}
                Github Repo
              </Button>
              <Button
                variant="outline-secondary"
                className="mr-2 mb-2"
                onClick={() => updateState(true, `${list.name} Feedback`, false)}
                title={"Give Feedback on" + list.name}
              >
                Feedback
              </Button>
              {list.project && (
                <React.Fragment>
                  <Button
                    variant="outline-secondary"
                    className="mr-2 mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={list.project}
                  >
                    Website
                  </Button>
                  {list.article && (
                    <Button
                      variant="outline-secondary"
                      className="mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={list.article}
                    >
                      <FontAwesomeIcon
                        className="github"
                        icon={["fab", "medium"]}
                      />{" "}
                      Article
                    </Button>
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
          <div className="col-lg-4 mt-2 mt-lg-2">
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
  if (show === "InTheClear") {
    project = renderProject(ProjectList[0].items[0]);
  } else if (show === "InTheClearWeb") {
    project = renderProject(ProjectList[0].items[1]);
  } else if (show === "InTheClearMain") {
    project = renderProject(ProjectList[0].items[2]);
  } else if (show === "PathFinder") {
    project = renderProject(ProjectList[1].items[0]);
  } else if (show === "PersonalWebsite") {
    project = renderProject(ProjectList[2].items[0]);
  }

  return (
    <div id={id}>
      {/*<ContactForm modal={modal} onHide={() => setModal(false)} title={title} alert={alert} onClose={modalClose}/> */}
      <div className="featurette-divider"></div>
      <div className="container marketing">
        <Slide left>
          <Jumbotron className="shadow-lg">
            <h1 className="text-center chewy-font mb-4">Projects</h1>
            <div className="row">
              <div className="col-lg-3">
                <Nav
                  className="flex-column"
                  variant="pills"
                  defaultActiveKey="InTheClear"
                  onSelect={(selectedKey) => setShow(`${selectedKey}`)}
                >
                  {ProjectList.map((project) => (
                    <ListItems project={project} key={project.name} />
                  ))}
                </Nav>
              </div>
              <div className="col-lg-9">
                <div className="tab-content" id="tabContent">
                  {project}
                </div>
                <div></div>
              </div>
            </div>
          </Jumbotron>
        </Slide>
        <div className="featurette-divider" />
      </div>
    </div>
  );
};

export default Projects;
