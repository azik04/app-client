import DialogButton from "../../Button/DialogButton/DialogButton"
import "./style.css"

const DialogPop = ({ remove, header, text, onClose }) => {
    return (
        <div className="dialog-pop">
            <div className="dialog-pop__container">
                
                <div className="dialog-pop__header mb-3">
                    <h4>{header}</h4>
                    <button className="btn-close" onClick={onClose}></button>
                </div>

                <form className="dialog-pop__form" onSubmit={remove}>
                    
                    <p className="pop-form__body mb-3">Are you sure you want {text} ?</p>


                    <DialogButton onClose={onClose} />
                </form>

            </div>
        </div>
    )
}

export default DialogPop