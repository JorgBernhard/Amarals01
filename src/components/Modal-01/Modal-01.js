import React from 'react';
import '../style-modal01.css';


const Modal01 = props => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal01">
        <div className="modal-content01">
            <div className="modal-header01">
                <h4 className="modal-title01">Speisekarte</h4>
            </div>
            <div className="modal-body01">This is modal 01</div>
            <div className="modal-footer01">
                <button className="ButtonModal" onClick={props.onClose}>Schließen</button>
            </div>
        </div>
    </div>
)
}
export default Modal01;