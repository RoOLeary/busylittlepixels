import React, { Children, PropsWithChildren } from 'react';
// import { Header } from './Header';
// import {Hero} from './Hero';
// import {TitleContainer} from './TitleContainer';
// import {TextVisual} from './TextVisual';
import { ProjectSlider } from './ProjectSlider';
import { CarouselContainer } from "../components/Carousel";
import { GalleryGrid } from "../components/GalleryGrid";
import { Expertise } from '../components/Expertise';
import { Faqs } from './Faq/Faqs';
import { Video } from './Video';
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
            // case 'header':
                
            //     return <Header key={block[1]['uid']} headline={blockContent['headline']} />;
            // case 'hero':
            //     return <Hero key={block[1]['uid']} eyebrow={blockContent['eyebrow']} heading={blockContent['heading']} subHeading={blockContent['subHeading']} />;
            // case 'text':
            //     return <Text key={block[1]['uid']} heading={blockContent['heading']} column1={blockContent['column1']} column2={blockContent['column2']}/>;
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
            // case 'faq':
            //     return <Faq key={block[1]['uid']} content={blockContent} />;
            case 'video':
                return (<Video 
                    key={block[1]['uid']} 
                    videoTitle={blockContent['videoTitle']}
                    videoEmbedCode={blockContent['videoEmbedCode']} 
                />
                );
            // case 'speakers':
            //     return (
            //         <Speakers 
            //             key={block[1]['uid']} 
            //             heading={blockContent['heading']} 
            //             speakersIntro={blockContent['speakersIntro']} 
            //             speakers={blockContent['speakers']} 
            //         />
            //     );
            // case 'signup':
            //     return (
            //         <Signup 
            //             key={block[1]['uid']}
            //             signupHeading={blockContent['signupHeading']} 
            //             signupText={blockContent['signupText']} 
            //             hubspotEmbed={blockContent['hubspotEmbed']} 
            //         />
            //     );
            // case 'blocks':
                // return (
                //     <Blocks 
                //         key={block[1]['uid']} 
                //         // uid={blockContent['uid']} 
                //         text1={blockContent['text1']}
                //         text2={blockContent['text2']}
                //         heading1={blockContent['heading1']}
                //         heading2={blockContent['heading2']}
                //         ctas1={blockContent['ctas1']}
                //         ctas2={blockContent['ctas2']}
                //         image1={blockContent['image1']}
                //         image2={blockContent['image2']}
                //     />
                // ); 
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