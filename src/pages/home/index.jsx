import React, { useEffect, useState } from 'react';
import HomeListRecipe from '../../components/HomeListRecipe';
import { baseApi } from '../../constance';
import axios from 'axios';

function HomeRecipe() {
const [trendFoods, setTrendFoods] = useState([]);
const [newFoods, setNewFoods] = useState([]);
const [randomFoods, setRandomFoods] = useState([]);
useEffect(() => {
    const fetchObjectDetail = async () => {
        try {
            const response = await axios.get(baseApi + `/home`);
            console.log('Response:', response.data);

            setTrendFoods(response.data.trend_foods);
            setNewFoods(response.data.newest_foods);
            setRandomFoods(response.data.ramdon_foods);
        } catch (error) {
            console.error('Error fetching object details:', error.message);
        }
    };

    fetchObjectDetail();
},[])


return (
     <HomeListRecipe trendFoods={trendFoods} newFoods={newFoods} randomFoods={randomFoods} />

    
    
    )
}

export default HomeRecipe;
