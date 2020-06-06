import "../sass/Modal.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

    return (
        <div className="modal is-active" onClick={close}>
            <div className="modal-background"></div>
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