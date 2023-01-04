

interface IVideo {
    videoEmbedCode?: string,
}

export const Video = () => {

    return(
        <section className="mx-auto flex items-center">
            <div className="video-container">
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/I1188GO4p1E" title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
            </div>
        </section>
    )
}

