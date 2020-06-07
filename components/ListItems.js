import React, {useState} from 'react'

function createList(item, select, show, idx){
    return (<button 
        id={idx} 
        className={`w-11/12 text-left block rounded py-2 px-4 navNotActive ${show == idx ? "navActive" : ""}`} 
        onClick={select}>
        {item.title}
        </button>)
}
  
  
export default function ListItem({project, idx, select, current}) {
    const [show, setShow] = useState(true)

    if(project.items && project.items.length > 1){
      return (
        <li className="flex-1 mr-2" key={idx}>
            <button className="navNotActive dropdown-toggle" onClick={() => setShow(!show)}>{project.title}</button>
            {show && 
                <div className="ml-3">
                {project.items.map(item => createList(item, select, current, item.title))}
                 </div>
            }
        </li>
      )
    }else {
      return createList(project, select, current, idx)
    }
}