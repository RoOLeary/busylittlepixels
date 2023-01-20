import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param { VideoProps }
 */
const Video = ({ slice }) => (
  <section className="mx-auto flex items-center">
    <div className="video-container">
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/I1188GO4p1E" title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
    </div>
  </section>
  //   <span className="title">
  //     {
  //       slice.primary.title ?
  //       <PrismicRichText field={slice.primary.title}/>
  //       : <h2>Template slice, update me!</h2>
  //     }
  //   </span>
  //   {
  //     slice.primary.description ?
  //     <PrismicRichText field={slice.primary.description}/>
  //     : <p>start by editing this slice from inside Slice Machine!</p>
  //   }
  //   <style jsx>{`
  //       section {
  //         max-width: 600px;
  //         margin: 4em auto;
  //         text-align: center;
  //       }
  //       .title {
  //         color: #8592e0;
  //       }
  //   `}</style>
  // </section>
)

export default Video