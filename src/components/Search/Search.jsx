import React, { useEffect, useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './Search.css';
import PopupSearch from './PopupSearch/PopupSearch';

const Search = ({ name, setName, ingredients, setIngredients }) => {
    const [selectedWords, setSelectedWords] = useState([]);
    // const [inputValue, setInputValue] = useState('');

    const handleSearchInputChange = (word) => {
        setSelectedWords(!selectedWords.includes(word) ? [...selectedWords, word] : [...selectedWords]);
        // setInputValue('');
        setIngredients(!selectedWords.includes(word) ? [...selectedWords, word] : [...selectedWords]);
    };

    const handleInputChange = (value) => {
        // setInputValue(value);
        setIngredients(value)
    };


    const handleDeleteWord = (index) => {
        const updatedWords = [...selectedWords];
        updatedWords.splice(index, 1);
        setSelectedWords(updatedWords);
        setIngredients(updatedWords);
    };
    const customColStyle = {
        flex: '0 0 80%',
        maxWidth: '25.5%',
        backgroundColor: '#FF642F',
        marginTop: '80px',
        marginRight: '30px',
        height: '90px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    };

    const customColStyle2 = {
        flex: '0 0 80%',
        maxWidth: '45%',
        backgroundColor: '#FF642F',
        marginRight: '47px',
        marginTop: '80px',
        height: '90px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
    };
    const selectedWordsStyle = {
        marginTop: '5px',
        width: '25%',
        marginRight: '700px',
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
        <MDBRow className="justify-content-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <MDBCol className="search-box1" style={customColStyle}>
                <div className="text-in-search-box">Tìm kiếm nguyên liệu</div>

                <input
                    className="form-control"
                    type="text"
                    placeholder="Nhập tên nguyên liệu"
                    value={ingredients}
                    onChange={(e) => handleInputChange(e.target.value)}
                    aria-label="Search"
                />
                <PopupSearch
                    isOpen={!!ingredients}
                    inputValue={ingredients}
                    words={['Tôm', 'Hành', 'Tỏi', 'Cá', 'Sườn heo']}
                    onSelect={handleSearchInputChange}
                    onClose={() => setIngredients('')}
                />
            </MDBCol>

            <MDBCol className="search-box2" style={customColStyle2}>
                <div className="text-in-search-box">TÌm kiếm món ăn</div>

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
