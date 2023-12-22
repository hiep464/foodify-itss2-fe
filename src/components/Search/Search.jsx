import { MDBCol, MDBRow } from 'mdbreact';
import React, { useState } from 'react';

import './Search.css';

const Search = ({ name, setName, ingredients, setIngredients }) => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSearchInputChange = (event) => {
        if (event.key === 'Enter'&&inputValue.trim()!='') {
       // const word = event.target.value;
        setSelectedWords(!selectedWords.includes(inputValue) ? [...selectedWords, inputValue] : [...selectedWords]);
        setIngredients(!selectedWords.includes(inputValue) ? [...selectedWords, inputValue] : [...selectedWords]);
        setInputValue('');
        }
    };

    const handleInputChange = (value) => {
         setInputValue(value);
       // setIngredients(value)
    };

    const handleDeleteWord = (index) => {
        const updatedWords = [...selectedWords];
        updatedWords.splice(index, 1);
        setSelectedWords(updatedWords);
        setIngredients(updatedWords);
    };
    const customColStyle = {
        // flex: '0 0 80%',
        maxWidth: '26%',
        backgroundColor: '#FF642F',
        marginTop: '80px',
        marginRight: '30px',
        height: '130px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        
    };

    const customColStyle2 = {
        // flex: '0 0 80%',
        maxWidth: '48.5%',
        backgroundColor: '#FF642F',
        // marginRight: '32px',
        marginTop: '80px',
        height: '130px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
    };
    const selectedWordsStyle = {
        marginTop: '5px',
        width: '25%',
        marginRight: '790px',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5px', // Adjust padding for better spacing
    };

    const wordBoxStyle = {
        backgroundColor: '#c4c4c4',
        color: 'black', // Text color
        border: '1px solid #ccc', // Border for each word box
        borderRadius: '5px', // Rounded corners
        margin: '2px', // Margin between each word box
        padding: '3px 8px', // Padding for better spacing
        display: 'flex', // Center text vertically
        alignItems: 'center', // Center text vertically
        fontSize: '14px',
    };

    return (
        <MDBRow className="justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', }}>
            <MDBCol className="search-box1" style={customColStyle}>
                <div className="text-in-search-box">Tìm kiếm nguyên liệu</div>

                <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập tên nguyên liệu"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={(e)=> handleSearchInputChange(e)}
                    aria-label="Search"
                />
              
            </MDBCol>

            <MDBCol className="search-box2" style={customColStyle2}>
                <div className="text-in-search-box">Tìm kiếm món ăn</div>

                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                    className="form-control"
                    type="text"
                    placeholder="Nhập tên món ăn"
                    aria-label="Search"
                />
            </MDBCol>

            <div className="selected-words" style={selectedWordsStyle}>
                {selectedWords.map((word, index) => (
                    <span key={index} style={wordBoxStyle}>
                        {word}{' '}
                        <span className="buttonX" onClick={() => handleDeleteWord(index)}>
                            X
                        </span>
                    </span>
                ))}
            </div>
        </MDBRow>
    );
};

export default Search;
