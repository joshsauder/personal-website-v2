import React, { useState } from "react";

function createList(item, select, show, idx) {
  return (
    <button
      id={idx}
      className={`w-11/12 text-left block rounded py-2 px-4 my-1 navNotActive ${
        show == idx ? "navActive" : ""
      }`}
      onClick={select}
    >
      {item.title}
    </button>
  );
}

export default function ListItem({ project, idx, select, current }) {
  const [show, setShow] = useState(true);

  return (
    <li className="flex-1 mr-2" key={idx}>
      {project.items && project.items.length > 1 ? (
        <React.Fragment>
          <button
            className="navNotActive dropdown-toggle rounded"
            onClick={() => setShow(!show)}
          >
            {project.title}
          </button>
          {show && (
            <div className="ml-3">
              {project.items.map((item) =>
                createList(item, select, current, item.title)
              )}
            </div>
          )}
        </React.Fragment>
      ) : (
        createList(project, select, current, idx)
      )}
    </li>
  );
}
