import React from 'react';
import '../style-modal03.css';


const Modal03 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal03">
        <div className="modal-content03">
            <div className="modal-header03">
                <h4 className="modal-title03">Getränkekarte</h4>
            </div>
            <div className="modal-body03">This is modal 03</div>
            <div className="modal-footer03">
                <button className="ButtonModal" onClick={props.onClose}>Schließen</button>
            </div>
        </div>
    </div>
)
}
export default Modal03;