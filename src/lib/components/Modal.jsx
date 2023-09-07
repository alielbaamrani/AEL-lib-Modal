import React from "react";
import "./Modal.scss";

/**
 * Composant Modal réutilisable pour afficher du contenu dans une fenêtre modale.
 * @param {object} props - Les propriétés du composant Modal.
 * @param {boolean} props.isDisplayed - Indique si le modal doit être affiché ou non.
 * @param {function} props.onCloseModal - La fonction à appeler lorsque le modal est fermé.
 * @param {ReactNode} props.content - Le contenu à afficher dans le modal (peut être n'importe quel élément React).
 * @returns {JSX.Element} Le composant Modal.
 */
const Modal = ({ isDisplayed = false, onCloseModal, content }) => {
  return (
    <div
      className="custom-modal"
      style={{ display: isDisplayed ? "block" : "none" }}
    >
      <div className="custom-modal-main">
        <div className="custom-modal-content">{content}</div>
        <div onClick={onCloseModal} className="custom-modal-btn-close">
          Fermé
        </div>
      </div>
    </div>
  );
};

export default Modal;
