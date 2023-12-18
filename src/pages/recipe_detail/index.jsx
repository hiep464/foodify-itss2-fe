import React, { useEffect, useState } from 'react'; 
import MyLayout from '../../components/MiddleRecipeDetail';
import HeadRpDetail from '../../components/headRecipeDetail';

function RecipeDetail() {
    return (
        <div>
            <HeadRpDetail/>
            <MyLayout/>
        </div>
    );
}

export default RecipeDetail;