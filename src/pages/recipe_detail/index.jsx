import axios from 'axios';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Comments from '../../components/Comments/Comments';
import HeadRpDetail from '../../components/headRecipeDetail';
import MiddleRecipeDetail from '../../components/MiddleRecipeDetail';
import { baseApi } from '../../constance';

import './style.css';

function RecipeDetail() {
    const [foodDetail, setFoodDetail] = useState(null);
    const [comments, setComments] = useState([]);
    const { foodId } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [visible, setVisible] = useState(true);

    const handleShowMore = () => {
      setCurrentPage(prevPage => prevPage + 1)
    }

    const calculateTimeAgo = (timestamp) => {
      const parsedTime = parseISO(timestamp);
      return formatDistanceToNow(parsedTime, { addSuffix: true });
  };

    useEffect(() => {
        const fetchObjectDetail = async () => {
          try {
            const response = await axios.get(baseApi+`/food/${foodId}`);
            
            setFoodDetail(response.data);

          } catch (error) {
            console.error('Error fetching object details:', error.message);
          }
        };
    
        fetchObjectDetail();
      }, [foodId]);

    useEffect(() => {
      fetchComments();
    }, [foodId, currentPage]);
    const fetchComments = async () => {
      try {
          const response = await axios.get(baseApi + `/food/${foodId}/comments?page=${currentPage}&page_size=2`);

          if (response.data.current_page == response.data.last_page) {
            setVisible(false); // Nếu không có comment mới, ẩn nút "Show more"
          }
          
        //   setComments(prevComments => [
        //     ...prevComments,
        //     ...response.data.data,
        // ]);
          if(currentPage>1){
            setComments(prevComments => ({
              data: [...prevComments.data, ...response.data.data],
              current_page: response.data.current_page,
              last_page: response.data.last_page,
          }));
          } else {setComments(response.data);}
      } catch (error) {
          console.log(error);
      }
    }

    const handleCommentSubmit = () => {
        fetchComments();
    }

    return (
        <div>
            <HeadRpDetail name={foodDetail?.name} description={foodDetail?.description} video={foodDetail?.video}/>
            <MiddleRecipeDetail foodData={foodDetail}/>
            <Comments foodId={foodId}  onCommentSubmit={handleCommentSubmit}/>
            <div className='list-comment'>
                {comments.data && comments.data.length > 0 ? (
                    comments.data.map( (comment) => (
                        <div key={comment.id} className='cmt row' >
                            <div>
                            <div className='username'>{comment.username}</div>
                            <span className='time'>{calculateTimeAgo(comment.created_at)}</span>
                            </div>
                            <p className='content'>{comment.content}</p>
                        </div>
                    ))
                ) : (
                    <p>Không có comment</p>
                )}
                {visible && (
                <button className='showmore' onClick={handleShowMore}>
                    Xem thêm
                </button>
            )}
            </div>
            
        </div>
    );
}

export default RecipeDetail;