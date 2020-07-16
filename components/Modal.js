import "../sass/Modal.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react"

export const Title = ({children}) => {
    return (
        <div className="mb-4">
            {children}
        </div>
    )
}

export const Body = ({children}) => {
    return (
        <div className="mb-4">
            {children}
        </div>
    )
}

const Modal = ({children, close}) => {

    useEffect(() => {
        const darkenBG = document.createElement("div")
        darkenBG.id = "darkenBG"
        darkenBG.className = "modal-background"
        document.body.appendChild(darkenBG)
    }, [])

    const closeBG = () => {
        const darkenBG = document.getElementById("darkenBG")
        darkenBG.remove()
        close()
    }

    return (
        <div className="modal is-active" onClick={closeBG}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <button className="modal-close">
                <FontAwesomeIcon icon="times" />
            </button>
        </div>
    )
}

Modal.Title = Title
Modal.Body = Body

export default Modal