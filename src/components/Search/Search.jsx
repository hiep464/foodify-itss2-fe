import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';

import './Search.css';

const Search = ({name, setName, ingredients, setIngredients}) => {
    const customColStyle = {
        flex: '0 0 80%',
        // maxWidth: '26%',
        maxWidth:'347px',
        backgroundColor: '#FF642F',
        marginTop: '80px',
        marginLeft:'145px',
        height: '90px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    const customColStyle2 = {
        flex: '0 0 80%',
        maxWidth: '45%',
        backgroundColor: '#FF642F',
        marginLeft: '30px',
        marginTop: '80px',
        height: '90px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <MDBRow className="" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <MDBCol className="search-box1" style={customColStyle}>
                <div className="text-in-search-box">Tìm kiếm nguyên liệu</div>

                <div>
                    <input onChange={(e) => {setIngredients(e.target.value)}} className="form-control" type="text" placeholder="Nhập tên nguyên liệu" aria-label="Search" />
                </div>
            </MDBCol>

            <MDBCol className="search-box2" style={customColStyle2}>
            <div className="text-in-search-box">TÌm kiếm món ăn</div>

       
      <input onChange={(e) => {setName(e.target.value)}} className="form-control" type="text" placeholder="Nhập tên món ăn" aria-label="Search" />
            </MDBCol>
        </MDBRow>
    );
};

export default Search;
