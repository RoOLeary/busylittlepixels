
import { Bounded } from "./Bounded"

interface IVideo {
    videoTitle?:string,
    videoEmbedCode?: string,
}

export const Video = ({ videoTitle, videoEmbedCode }: IVideo ) => {

    return(

        <Bounded collapsible={false} as="section" className="mx-auto flex items-center">
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">Video <span style={{ "color": "red"}}>KILLED</span> The Radio Star</h2>
            <div className="header__underline"></div>
            <div className="video-container mt-8">
                <iframe className="video" width="560" height="315" src={videoEmbedCode ? videoEmbedCode : "https://www.youtube.com/embed/I1188GO4p1E"} title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
            </div>
        </Bounded>
    )
}

