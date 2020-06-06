import React, {useState} from 'react'

function createList(item, select, show){
    return (<button 
        id={item.eventKey} 
        className={`w-11/12 text-left block rounded py-2 px-4 navNotActive ${show === item.eventKey && "navActive"}`} 
        onClick={select}>
        {item.name}
        </button>)
}
  
  
export default function ListItem({project, key, select, current}) {
    const [show, setShow] = useState(true)
    console.log(current)

    if(project.items.length > 1){
      return (
        <li className="flex-1 mr-2" key={key}>
            <button className="navNotActive dropdown-toggle" onClick={() => setShow(!show)}>{project.name}</button>
            {show && 
                <div className="ml-3">
                {project.items.map(item => createList(item, select, current))}
                 </div>
            }
        </li>
      )
    }else {
      return createList(project.items[0], select, current)
    }
}