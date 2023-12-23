// Your component file

import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CarouselItem from './CarouselItem';
  
function HomeListRecipe({ trendFoods, newFoods, randomFoods }) {
   
      return (

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <CarouselItem data={trendFoods} title='Xu hướng'></CarouselItem>
        <CarouselItem data={newFoods} title='Công thức mới nhất'></CarouselItem>
        <CarouselItem data={randomFoods} title='Hôm nay nấu gì?'></CarouselItem>
        </div>
      );
}

export default HomeListRecipe;
