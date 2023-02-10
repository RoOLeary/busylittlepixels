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
      <section className="bg-white mt-2 carouselLeft pb-2">
        
        <div class="mx-auto max-w-prose text-lg mb-4 pl-4 sm:pl-4">
          <h1 class="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-2 md:mb-6 last:mb-0 uppercase">LET IT <span style={{"color":"red"}}>SLIDE...</span></h1>
          <div class="header__underline"></div>
        </div>
        <Carousel showDots={false} responsive={responsive}> 
          {carouselPanels}
        </Carousel>
      </section>
    </>
    
  );
}

export default CarouselContainer








