import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Bounded } from "./Bounded";


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
    items: 2
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
    <section className="bg-white mb-2">
      <Carousel showDots={false} responsive={responsive}>
        {
          items.map((item, index) => {
            return <div className={'md:mr-2'} key={index}><img src={item.carousel_image_url} height={'300px'} width={'450px'} /></div>
          })
        }
      </Carousel>
    </section>
  );
}

export default CarouselContainer








