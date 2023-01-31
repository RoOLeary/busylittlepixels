import React, { Children, PropsWithChildren } from 'react';
// import { Header } from './Header';
// import {Hero} from './Hero';
// import {TitleContainer} from './TitleContainer';
// import {TextVisual} from './TextVisual';
import { ProjectSlider } from './ProjectSlider';
import { CarouselContainer } from "./Carousel";
import { GalleryGrid } from "./GalleryGrid";
import { Expertise } from './Expertise';
import { Faqs } from './Faq/Faqs';
import { Video } from './Video';
import { TextBlock } from './TextBlock';
import { VideoComponent } from './VideoComponent';
// import { Signup } from './Signup';
// import IBlocks from './../interfaces/IBlocks'

interface IProps {
    // @ts-ignore
    content: IBlocks[];
}

// @ts-ignore
function renderContent(content: IBlocks[]) {
    const pageBlocksList = Object.entries(content).map((block: any, id: number) => {
        const blockContent = block[1];

        switch (blockContent['blockType']) {
            case 'gallerygrid':
                return (
                    <GalleryGrid 
                        key={block[1]['uid']}
                        gallery={blockContent['gallery']}
                     />
                );
            case 'imageSlider':
                return <ProjectSlider key={block[1]['uid']} sliderTitle={blockContent['sliderTitle']} sliderStage={blockContent['sliderStage']} />;
            case 'expertise':
                return <Expertise key={block[1]['uid']}  />;
            case 'video':
                return (<VideoComponent 
                    key={block[1]['uid']} 
                    videoTitle={blockContent['videoTitle']}
                    videoEmbedCode={blockContent['videoEmbedCode']} 
                />
                );
            case 'textBlock':
                return(
                    <TextBlock 
                        key={block[1]['uid']}
                        textTitle={blockContent['textTitle']}
                        textBoldTitle={blockContent['textBoldTitle']}
                        textContent={blockContent['textContent']}
                    />
                );
            case 'carousel':
                return <CarouselContainer key={block[1]['uid']} title={blockContent['carouselTitle']} items={blockContent['carouselItems']}/>
            default:
                return (
                    <>
                        <div key={id}>
                            <h3>{block[1]['blockType']}</h3>
                            <pre>{JSON.stringify(block, null, 2)}</pre>
                        </div>
                    </>
                );
        }

    });

    return pageBlocksList;
}




const PageBlocks = ({ content }: IProps) => {
    return(
        <>
            {renderContent(content)}
        </>
    )
} 

export default PageBlocks;