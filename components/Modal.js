import "../css/Modal.sass"

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
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                {children}
            </div>
            <button className="btn-outline-secondary" onClick={close}>Close</button>
        </div>
    )
}

Modal.Title = Title
Modal.Body = Body

export default Modal