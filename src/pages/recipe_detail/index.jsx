import React, { useEffect, useState } from 'react'; 
import MiddleRecipeDetail from '../../components/MiddleRecipeDetail';
import { baseApi } from '../../constance';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function RecipeDetail() {
    const [foodDetail, setFoodDetail] = useState(null);
    const { foodId } = useParams();

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
    return (
        <div>
            <MiddleRecipeDetail foodData={foodDetail}/>
        </div>
    );
}

export default RecipeDetail;