import React from 'react';

function Modal({ onClose, currentPhoto }) {
  const {name, category, description, url, index} = currentPhoto;

  return (
   <div className="modalBackdrop">
      <div className="modalContainer" data-aos="zoom-in-up">
        <h3 className="modalTitle">{name} </h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
        <img
            src={require(`../../assets/small/${category}/${index}.png`)}
            alt={name}
            className="img-thumbnail mx-1"
            key={name}
          />
          </a>
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
