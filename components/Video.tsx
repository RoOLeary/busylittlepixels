

interface IVideo {
    videoTitle?:string,
    videoEmbedCode?: string,
}

export const Video = ({ videoTitle, videoEmbedCode }: IVideo ) => {

    return(
        <section className="mx-auto flex items-center">
            <div className="video-container">
                <iframe className="video" width="560" height="315" src={videoEmbedCode ? videoEmbedCode : "https://www.youtube.com/embed/I1188GO4p1E"} title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
            </div>
        </section>
    )
}

