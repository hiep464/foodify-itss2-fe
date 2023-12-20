import React from 'react';

import bulletPoint from '../../acess/bullet-point.png';

import './middleRecipeDetail.css';

const MiddleRecipeDetail = ({ foodData }) => {
     
    return (
        <div>
            {/* Row 1 */}
            <div style={{display: 'flex',marginLeft:'150px', alignItems:'center', marginBottom:'20px'}}>
                <div className="grid-container" style={{width:'68%'}}>
                    <div className="grid-item">Thời gian chuẩn bị</div>
                    <div className="grid-item">Thời gian nấu</div>
                    <div className="grid-item">Khẩu phần</div>
                    <div className="grid-item1">{foodData?.prep_time ? `${foodData.prep_time} phút` : ''}</div>
                    <div className="grid-item1">{foodData?.cooking_time ? `${foodData.cooking_time} phút` : ''}</div>
                    <div className="grid-item1">{foodData?.servings  ?`${foodData.servings} người` : ''}</div>
                </div>
            </div>

            {/* Row 2 */}
            <div className="justify-content-center" style={{ display: 'flex' }}>
                {/* Column 1 */}
                <div style={{ width:'45%', marginLeft: 132 }}>
                    <p style={{ fontWeight: 'bold', color: 'black', fontSize: '30px' }}>Nguyên Liệu</p>
                    {foodData?.ingredients.map((ingredient) => {
                        return (
                            <div style={{ marginTop: 30, fontSize: 18, color: 'black' }}>
                                <img
                                    src={bulletPoint}
                                    style={{ marginLeft: 5, marginRight: 30, marginBottom: 2 }}
                                ></img>
                                {ingredient.description}
                            </div>
                        );
                    })}
                </div>

                {/* Column 2 */}
                <div style={{  display: 'flex', flexDirection: 'column' ,width:'33%'}}>
                    <p style={{ fontWeight: 'bold', color: 'black', fontSize: '30px' }}>Công Thức</p>
                    {foodData?.steps.map((step) => {
                        return (
                            <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 15 }}>
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: '#FF642F',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '10px',
                                        marginRight: '10px',
                                        marginTop: '3px', // Adjusted the margin to separate the circle and text
                                    }}
                                >
                                    {step.number}
                                </span>
                                <div style={{ flex: 1 }}>
                                    <span style={{ display: 'inline-block', whiteSpace: 'normal', paddingBottom: 10 }}>
                                        {step.content}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MiddleRecipeDetail;
