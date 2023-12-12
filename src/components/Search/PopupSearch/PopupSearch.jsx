// PopupComponent.js
import React from 'react';
import './PopupSearch.css';
const PopupSearch = ({ isOpen, words, inputValue, onSelect, onClose }) => {
  const normalizedInputValue = inputValue ? inputValue.toLowerCase() : '';

  const filteredWords = words.filter((word) =>
    word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(normalizedInputValue)
  );

  return (
    <div className="popup" style={{ display: isOpen ? 'block' : 'none' }}>
      <span onClick={onClose} className="close-button">
        &#10006;
      </span>
      {filteredWords.map((word, index) => (
        <div key={index} onClick={() => onSelect(word)}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default PopupSearch;
