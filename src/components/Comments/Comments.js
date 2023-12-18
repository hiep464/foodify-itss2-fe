import axios from 'axios';
import React, { useState } from 'react';

import { baseApi } from '../../constance';

import './style.css';

const Comments = ({ foodId , onCommentSubmit}) => {
    const [username, setUserName] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append('username', username);
            formData.append('content', content);

            if (!username.trim() || !content.trim()) {
                setError('Vui lòng nhập tên và nội dung bình luận.');
                return;
            }

            const response = await axios.post(baseApi + `/food/${foodId}/comments/save`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            onCommentSubmit();
            setUserName('');
            setContent('');
            
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='justify-content-center comments'>
            <form onSubmit={handleSubmit}>
                <div className='row '>
                    <input type='text' className='input-name' placeholder='Nhap ten cua ban...' value={username} onChange={(e) => setUserName(e.target.value)} required />
                    <textarea id='content' className='input-content' placeholder='Binh luan...' value={content} onChange={(e) => setContent(e.target.value)} required />
                    <button className='submit-control btn' type='submit' onClick={handleSubmit}>Binh luan</button>
                </div>
            </form>
        </div>
    );
}

export default Comments;
