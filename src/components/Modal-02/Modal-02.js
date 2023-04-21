import React from 'react';
import '../style-modal02.css';


const Modal02 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal02">
        <div className="modal-content02">
            <div className="modal-header02">
                <h4 className="modal-title02">Nachtische und Süßes</h4>
            </div>
            <div className="modal-body02">This is modal 02</div>
            <div className="modal-footer02">
                <button className="ButtonModal" onClick={props.onClose}>Schließen</button>
            </div>
        </div>
    </div>
)
}
export default Modal02;