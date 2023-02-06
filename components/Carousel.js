import React from 'react'
import Image from 'next/image'
import imageLoader from '../imageLoader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Bounded } from "./Bounded";
// import { GalleryGrid } from "../components/GalleryGrid";
// import { Video } from "../components/Video";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const CarouselContainer = ({ title, items }) => {
  
  
  
  const carouselPanels = items ? items.map((item, index) => {
    return (
        <div className={'mr-2'} key={index}>
          <Image src={item.carouselImageUrl} height={300} width={450} loader={imageLoader} unoptimized={true} alt={item.carouselTitle} />
        </div>
      )
  }) : null;

  return(
    <>
      {/* <h2 className="px-6 md:px-0 mt-8 mb-12 text-2xl font-black leading-tight text-gray-900 md:border-b border-gray-200 md:text-4xl uppercase mx-auto w-full max-w-6xl pb-2"><span className="rd_txt">{title ? title : 'Sides'}</span></h2>   */}
      <section className="bg-white mt-2 carouselLeft pb-2">
        <Carousel showDots={false} responsive={responsive}> 
          {carouselPanels}
        </Carousel>
      </section>
    </>
    
  );
}

export default CarouselContainer








