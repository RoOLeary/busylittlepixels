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

const CarouselContainer = () => {
  
    const items = [
        {
          carousel_image_url: 'https://placedog.net/450/300/r',
          carousel_title: 'One',
          job: 'Tinker'
        },
        {
          carousel_image_url: 'https://placedog.net/450/300/r',
          carousel_title: 'Two',
          job: 'Tailor'
        },
        {
          carousel_image_url: 'https://placedog.net/450/300/r',
          carousel_title: 'Three',
          job: 'Coder'
        },
        {
          carousel_image_url: 'https://placedog.net/450/300/r',
          carousel_title: 'Four',
          job: 'Spy'
        },
        {
          carousel_image_url: 'https://placedog.net/450/300/r',
          carousel_title: 'Two',
          job: 'Tailor'
        },
        {
          carousel_image_url: 'https://placedog.net/450/300/r',
          carousel_title: 'Three',
          job: 'Coder'
        },
        {
          carousel_image_url: 'https://placedog.net/450/300/r',
          carousel_title: 'Four',
          job: 'Spy'
        }
      ]


  return(
    <>
    <h2 class="px-6 md:px-0 mt-8 mb-12 text-2xl font-black leading-tight text-gray-900 md:border-b border-gray-200 md:text-4xl uppercase mx-auto w-full max-w-6xl pb-2">Sliding <span class="rd_txt">Things</span></h2>  
    <section className="bg-white mb-2 carouselLeft">
      <Carousel showDots={false} responsive={responsive}> 
        {/* <div>
          <GalleryGrid />
        </div>
        <div>
          <Video />
        </div> */}
        {
          items.map((item, index) => {
            return <div className={'mr-2'} key={index}><Image src={item.carousel_image_url} height={300} width={450} loader={imageLoader} alt={`Carousel Image number #${index}`} /></div>
          })
        }
      </Carousel>
    </section>
    </>
    
  );
}

export default CarouselContainer








