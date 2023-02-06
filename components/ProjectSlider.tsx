
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import imageLoader from '../imageLoader';

let initialState = {
    activeSlide: 1,
    isAutoPlay: true,
    defaultActive: 1,
}

export const ProjectSlider = ({ sliderTitle, sliderStage }:any) => {

    
    const length = sliderStage.length;
    const elementRef = useRef<HTMLDivElement>(null);
    const divElement: any = elementRef.current;

    const [activeSlide, setActiveSlide] = useState(initialState.activeSlide);
    const [isAutoPlay, setAutoPlay] = useState(initialState.isAutoPlay);

    const transitionSlide = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); 
        let wrapper,
            current, 
            currentSlide, 
            clickToSlide, 
            fadeSl: any, 
            assignActive: string | React.SetStateAction<number> | null,
            oldActive: Element | null;

            wrapper = divElement;
            
            // console.log(wrapper);
            currentSlide = document.querySelector('.flex--active');
            current = currentSlide ? currentSlide.getAttribute('data-slide') : initialState.defaultActive;  
            clickToSlide = e.currentTarget.getAttribute('data-slide');

            assignActive = clickToSlide ? clickToSlide : current;
           
            fadeSl = document.querySelector('.flex__container[data-slide="' + assignActive + '"]');
            oldActive = document.querySelector('.flex__container[data-slide="' + current + '"]');
            if(!fadeSl.classList.contains('flex--preStart')){
                fadeSl.classList.add('flex--preStart')
            }
           

        if (current === assignActive) {
            return false
        } else {
            // @ts-ignore
            oldActive.classList.add('flex--active', 'animate--end');
            fadeSl.classList.remove('flex--active', 'animate--end');
            fadeSl.classList.add('animate--start');
            setTimeout(() => {
                // @ts-ignore
                setActiveSlide(assignActive);
            }, 900)
        }   
    }

    useEffect(() => {
        
        const activeElement: any = elementRef.current 
        // @ts-ignore
        const current = document.querySelector('.flex--active') ? document.querySelector('.flex--active').getAttribute('data-slide') : initialState.defaultActive;    
        const autoFadeSl = activeElement.querySelector('.flex__container[data-slide="' + activeSlide + '"]'); 
        const oldActive = activeElement.querySelector('.flex__container[data-slide="' + current + '"]');
        let nextSlide = activeSlide;
            
        if(isAutoPlay){
            
            const interval = setInterval(() => {
                autoFadeSl.classList.add('flex--preStart');
                oldActive.classList.add('flex--active', 'animate--end');
                autoFadeSl.classList.remove('flex--active', 'animate--end');
                autoFadeSl.classList.add('animate--start');
            
                if (activeSlide == length) {
                        setActiveSlide(initialState.defaultActive)                
                    } else {
                        let nxtSld = ++nextSlide;
                        setTimeout(() => {
                            setActiveSlide(nxtSld);
                        }, 900)
                    }       
                }, 7000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [activeSlide, isAutoPlay, length]);

    return(

        <>
            <div className="slider__wrapper hidden md:block" ref={elementRef}>
                
                {sliderStage.map((sl: { slideColor: string; textSub: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; textHeading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; textContent: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; textBackground: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; slideImage: string | undefined; }, i: number) => {
                    const current = ++i;
                    return(
                        <div key={++i} className={`flex__container flex--${sl.slideColor.replace(/\s/g, '')} ${activeSlide == current ? `flex--active` : 'animate--start' }`} data-slide={current}>
                            <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">{sl.textSub}</p>
                                <h1 className="text--big font-serif">{sl.textHeading}</h1>
                                <p className="pt-4">{sl.textContent}</p>
                            </div>
                            <p className="text__background font-serif">{sl.textBackground}</p>
                            </div>
                            <div className="flex__item flex__item--right"></div>
                            {/* @ts-ignore */}
                            <Image className="project_slide_img hidden md:block" src={sl.slideImage} width="550" height="700" loader={imageLoader} alt={`${sl.textHeading} image`} />
                        </div>
                    )
                })}
                
                <div className="slider__navi">
                    {sliderStage.map((sl: { slideColor: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: number) => {
                        const current = ++i;
                        return(
                            // @ts-ignore
                            <a key={++i} href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == current ? `active` : '' }`} data-slide={current}>{sl.slideColor}</a>
                        ) 
                    })} 
                </div>    
            </div>
        </>
    ); 
}; 