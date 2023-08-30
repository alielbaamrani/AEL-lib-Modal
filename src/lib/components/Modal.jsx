import React from 'react'
import './Modal.scss'

const Modal = ({ isDisplayed = false, onCloseModal, content }) => {
  return (
    <div
      className="custom-modal"
      style={{ display: isDisplayed ? 'block' : 'none' }}
    >
      <div className="custom-modal-main">
        <div className="custom-modal-content">{content}</div>
        <div onClick={onCloseModal} className="custom-modal-btn-close">
          Fermé
        </div>
      </div>
    </div>
  )
}

export default Modal