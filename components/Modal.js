
export const Title = ({children}) => {
    return (
        <div className="p-8 mb-4">
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
        <div className="z-50 h-screen w-full flex flex-col justify-center bg-white rounded">
            {children}
            <button className="btn-outline-secondary" onClick={close}>Close</button>
        </div>
    )
}

Modal.Title = Title
Modal.Body = Body

export default Modal