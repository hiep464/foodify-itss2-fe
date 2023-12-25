import axios from 'axios';
import React, { useEffect, useState } from 'react';

import HomeListRecipe from '../../components/HomeListRecipe';
import { baseApi } from '../../constance';

function HomeRecipe() {
const [trendFoods, setTrendFoods] = useState([]);
const [newFoods, setNewFoods] = useState([]);
const [randomFoods, setRandomFoods] = useState([]);
const [mostFoods, setMostFoods] = useState([]);
useEffect(() => {
    const fetchObjectDetail = async () => {
        try {
            const response = await axios.get(baseApi + `/home`);
            console.log('Response:', response.data);

            setTrendFoods(response.data.trend_foods);
            setNewFoods(response.data.newest_foods);
            setRandomFoods(response.data.ramdon_foods);
            setMostFoods(response.data.most_likes_food);
        } catch (error) {
            console.error('Error fetching object details:', error.message);
        }
    };

    fetchObjectDetail();
},[])
    console.log(mostFoods.name)
return (
     <HomeListRecipe trendFoods={trendFoods} newFoods={newFoods} randomFoods={randomFoods} mostFoods={mostFoods}/>
    )
}

export default HomeRecipe;