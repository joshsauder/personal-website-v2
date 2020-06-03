import findByType from "./utils/FindByType"

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

    const renderTitle = () => findByType(children, Title)
    const renderBody = () => findByType(children, Body)

    return (
        <div className="z-50 h-screen w-full flex justify-center bg-white rounded">
            <div className="p-8 mb-4">
                {renderTitle()}
            </div>
            <div className="mb-4">
                {renderBody()}
            </div>
            <button className="btn-outline-secondary" onclick={close}>Close</button>
        </div>
    )
}

Modal.Title = Title
Modal.Body = Body

export default Modal