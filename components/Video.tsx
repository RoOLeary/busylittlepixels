

interface IVideo {
    videoEmbedCode?: string,
}

export const Video = () => {

    return(
        <section className="mx-auto flex items-center">
            <div className="container">
                <div className="o-grid o-grid--center">
                    <div className="o-grid__col l:o-grid__col--span-8">
                        <div className="b-video__video">
                            <div className="o-media o-media--16:9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/I1188GO4p1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

