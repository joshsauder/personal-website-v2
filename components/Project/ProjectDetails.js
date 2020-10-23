import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 /*
  Renders each project
  list - project list from ProjectList
  logo - applicable image
  */
 const ProjectDetails = ({list}) => {
    return (
      <div className="tab-pane fade show active" id={list.name} role="tabpanel">
        <div className="md:flex">
          <div className="md:w-2/3">
            <div className="font-normal text-xl">{list.description}</div>
            <div className="font-normal text-xl mt-3">{list.techStack}</div>
            <div className="mt-3 flex items-start">
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
          <div className="md:w-1/3 md:mt-2">
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

  export default ProjectDetails