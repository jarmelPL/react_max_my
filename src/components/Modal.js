import React from "react"
import ReactDOM from 'react-dom'
import './Modal.css';

const Modal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className='modal1'>
                    <button onClick={props.onClose}>Close Modal</button>
                </div>, document.getElementById('root-modal')
                )
            }
        </React.Fragment>
    )
}

export default Modal