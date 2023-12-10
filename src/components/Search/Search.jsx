import React from 'react';
import {  MDBRow, MDBCol } from 'mdbreact';
import './Search.css';
const Search = () => {
    const customColStyle = {
        flex: '0 0 80%',
        maxWidth: '15%',
        backgroundColor: '#FF642F',
        marginTop: '80px',
        height: '90px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    const customColStyle2 = {
        flex: '0 0 80%',
        maxWidth: '30%',
        backgroundColor: '#FF642F',
        marginLeft: '40px',
        marginTop: '80px',
        height: '90px',
        display: 'flex',
        flexDirection: 'column', // Display children in a column layout
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <MDBRow className="justify-content-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <MDBCol style={customColStyle}>
                <div className="text-in-search-box">Tìm kiếm nguyên liệu</div>

                <div>
                    <input className="form-control" type="text" placeholder="Nhập tên nguyên liệu" aria-label="Search" />
                </div>
            </MDBCol>

            <MDBCol style={customColStyle2}>
            <div className="text-in-search-box">TÌm kiếm món ăn</div>

       
      <input className="form-control" type="text" placeholder="Nhập tên món ăn" aria-label="Search" />
            </MDBCol>
        </MDBRow>
    );
};

export default Search;
