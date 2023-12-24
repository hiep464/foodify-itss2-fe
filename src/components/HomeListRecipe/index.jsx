import React from 'react';

import CarouselItem from './CarouselItem';
import MostItem from './MostItem/MostItem';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function HomeListRecipe({ trendFoods, newFoods, randomFoods,mostFoods }) {
      return (
        <>
          
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <MostItem data={mostFoods} title='Mon an duoc yeu thich nhat'/>
          <CarouselItem data={trendFoods} title='Xu hướng'></CarouselItem>
          <CarouselItem data={newFoods} title='Công thức mới nhất'></CarouselItem>
          <CarouselItem data={randomFoods} title='Hôm nay nấu gì?'></CarouselItem>
          </div>
        </>
      );
}

export default HomeListRecipe;
