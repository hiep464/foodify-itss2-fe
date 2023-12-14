import React from 'react';
import './middleRecipeDetail.css';
import bulletPoint from '../../acess/bullet-point.png';
const MyLayout = () => {
    return (
        <div>
            {/* Row 1 */}
            <div style={{ marginLeft: 150 }}>
                <div className="grid-container">
                    <div className="grid-item">Thời gian chuẩn bị</div>
                    <div className="grid-item">Thời gian nấu</div>
                    <div className="grid-item">Khẩu phần</div>
                    <div className="grid-item1">15 phút</div>
                    <div className="grid-item1">15 phút</div>
                    <div className="grid-item1">4 người</div>
                </div>
            </div>

            {/* Row 2 */}
            <div className="justify-content-center" style={{ display: 'flex' }}>
                {/* Column 1 */}
                <div style={{ flex: 0.8, marginLeft: 150 }}>
                    <p style={{ fontWeight: 'bold', color: 'black', fontSize: '30px' }}>Nguyên Liệu</p>
                    <div style={{ marginTop: 30, fontSize: 18, color: 'black' }}>
                        <img src={bulletPoint} style={{ marginLeft: 5, marginRight: 30,marginBottom:2 }}></img>400g bánh quy graham
                    </div>
                    <div style={{ marginTop: 30, fontSize: 18, color: 'black' }}>
                        <img src={bulletPoint} style={{ marginLeft: 5, marginRight: 30,marginBottom:2 }}></img>400g bánh quy graham
                    </div>
                    <div style={{ marginTop: 30, fontSize: 18, color: 'black' }}>
                        <img src={bulletPoint} style={{ marginLeft: 5, marginRight: 30,marginBottom:2 }}></img>400g bánh quy graham
                    </div>
                    <div style={{ marginTop: 30, fontSize: 18, color: 'black' }}>
                        <img src={bulletPoint} style={{ marginLeft: 5, marginRight: 30,marginBottom:2 }}></img>400g bánh quy graham
                    </div>
                </div>

                {/* Column 2 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontWeight: 'bold', color: 'black', fontSize: '30px' }}>Công Thức</p>
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
                                marginTop:'3px' // Adjusted the margin to separate the circle and text
                            }}
                        >
                            1
                        </span>
                        <div style={{ flex: 1 }}>
                            <span style={{ display: 'inline-block', whiteSpace: 'normal', paddingBottom: 10 }}>
                                Để chuẩn bị vỏ bánh, hãy cho bánh quy graham vào máy xay thực phẩm và chế biến cho đến
                                khi đạt được những miếng vụn mịn. Thêm bơ tan chảy và đập 3-4 lần để bơ phủ đều các mẩu
                                vụn.
                            </span>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div style={{ marginLeft: 150, marginTop: 30 }}>
                <input
                    placeholder="Nhập tên món ăn.."
                    style={{ width:360,backgroundColor: '#EEEEEE', border: 'none', outline: 'none' }}
                />{' '}
            </div>
        </div>
    );
};

export default MyLayout;
