// PopupComponent.js
import React from 'react';
import './PopupSearch.css';
const PopupSearch = ({ isOpen, words, inputValue, onSelect, onClose }) => {
    //console.log(inputValue);
    const normalizedInputValue = inputValue ? inputValue.toLowerCase() : '';
    console.log(normalizedInputValue);

    const filteredWords = words.filter((word) => word.toLowerCase().includes(normalizedInputValue)
    );
    //console.log(filteredWords);
    return (
        <div className="popup" style={{ display: isOpen ? 'block' : 'none', maxHeight: '230px', overflowY: 'auto' }}>
            {filteredWords.length > 0 && (
                <span onClick={onClose} className="close-button">
                    &#10006;
                </span>
            )}
            {filteredWords.map((word, index) => (
                <div key={index} onClick={() => onSelect(word)}>
                    {word}
                </div>
            ))}
        </div>
    );
};

export default PopupSearch;
