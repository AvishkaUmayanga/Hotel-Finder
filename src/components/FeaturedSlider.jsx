import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { featuredData } from '../data/FeatureData';
import FeaturedCard from './FeaturedCard';
const responsive = {
  superLargeDesktop: {

    breakpoint: { max: 5000, min: 1300 },
    items: 4
  },
  desktop: {
    breakpoint: { max:1300, min: 920 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 920, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function FeaturedSlider() {
  return (
    <div>
      <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}>
          {featuredData?.map(({image, city, listing},index)=>
          <FeaturedCard key={index} image={image} city={city} listing={listing}/>
          )}   
      </Carousel>;
    </div>
  );
}
