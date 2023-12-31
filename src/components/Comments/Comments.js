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
            setError('');
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='justify-content-center comments'>
            <form onSubmit={handleSubmit}>
                <div className='row '>
                    <input type='text' className='input-name' placeholder='Nhập tên của bạn...' value={username} onChange={(e) => setUserName(e.target.value)} required />
                    <textarea id='content' className='input-content' placeholder='Bình luận...' value={content} onChange={(e) => setContent(e.target.value)} required />
                    <button className='submit-control btn' type='submit' onClick={handleSubmit}>Bình luận</button>
                </div>
            </form>
            {error && <p className='error-message'>{error}</p>}
        </div>
    );
}

export default Comments;
