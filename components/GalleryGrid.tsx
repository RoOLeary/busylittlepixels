import { CSSProperties, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Image } from "react-grid-gallery";

// eslint-disable-next-line
export interface CustomImage extends Image {
  original: string;
}

// export const images: CustomImage[] = [
//   {
//     src: "/assets/img/heart.jpeg",
//     original: "/assets/img/heart.jpeg",
//     width: 340,
//     height: 212,
//     // tags: [
//     //   { value: "Rick", title: "Rick" },
//     //   { value: "Morty", title: "Morty" },
//     // ],
//     caption: "We get busy about Tech",
//   },
//   {
//     src: "/assets/img/devs.jpeg",
//     original: "/assets/img/devs.jpeg",
//     width: 320,
//     height: 212,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "/assets/img/blurredscreen.jpeg",
//     original: "/assets/img/blurredscreen.jpeg",
//     width: 320,
//     height: 212,
//     caption: "Color Pencils (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "/assets/img/not-a-meeting.jpeg",
//     original: "/assets/img/not-a-meeting.jpeg",
//     width: 320,
//     height: 213,
//     caption: "C'est ci n'est pas un meeting",
//   },
//   {
//     src: "/assets/img/coffee.jpeg",
//     original: "/assets/img/coffee.jpeg",
//     width: 320,
//     height: 183,
//     caption: "Coffee is to code as oil is to cars and environmental destruction",
//   },
//   {
//     src: "/assets/img/runner.jpg",
//     original: "/assets/img/runner.jpg",
//     width: 240,
//     height: 320,
//     // tags: [{ value: "Nature", title: "Nature" }],
//     caption: "8H (gratisography.com)",
//   },
//   {
//     src: "/assets/img/amsterdam5.jpeg",
//     original: "/assets/img/amsterdam5.jpeg",
//     width: 320,
//     height: 190,
//     caption: "286H (gratisography.com)",
//   },
//   {
//     src: "/assets/img/code1.jpeg",
//     original: "/assets/img/code1.jpeg",
//     width: 320,
//     height: 148,
//     // tags: [{ value: "People", title: "People" }],
//     caption: "315H (gratisography.com)",
//   },
//   {
//     src: "/assets/img/ams2.jpeg",
//     original: "/assets/img/ams2.jpeg",
//     width: 380,
//     height: 213,
//     caption: "Beautiful Amsterdam",
//   },
//   {
//     src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
//     original: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
//     alt: "Red Zone - Paris",
//     width: 320,
//     height: 113,
//     // tags: [{ value: "People", title: "People" }],
//     caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
//   },
//   // {
//   //   src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
//   //   original: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
//   //   alt: "Big Ben - London",
//   //   width: 248,
//   //   height: 320,
//   //   caption: "Big Ben (Tom Eversley - isorepublic.com)",
//   // },
  
//   {
//     src: "/assets/img/monster.jpeg",
//     original: "/assets/img/monster.jpeg",
//     alt: "Wood Glass",
//     width: 320,
//     height: 213,
//     caption: "Wood Glass (Tom Eversley - isorepublic.com)",
//   },
//   {
//     src: "/assets/img/code2.jpeg",
//     original: "/assets/img/code2.jpeg",
//     width: 320,
//     height: 213,
//     caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
//   },
//   {
//     src: "/assets/img/plants.jpeg",
//     original: "/assets/img/plants.jpeg",
//     width: 320,
//     height: 194,
//     caption: "Old Barn (Tom Eversley - isorepublic.com)",
//   },
//   {
//     src: "/assets/img/desk.jpeg",
//     original: "/assets/img/desk.jpeg",
//     alt: "Cosmos Flower",
//     width: 300,
//     height: 213,
//     caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
//   },
//   {
//     src: "/assets/img/app.jpeg",
//     original: "/assets/img/app.jpeg",
//     width: 520,
//     height: 320,
//     caption: "Orange Macro (Tom Eversley - isorepublic.com)",
//   },
//   // {
//   //   src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
//   //   original: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
//   //   width: 320,
//   //   height: 213,
//   //   // tags: [
//   //   //   { value: "Nature", title: "Nature" },
//   //   //   { value: "People", title: "People" },
//   //   // ],
//   //   caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
//   // },
//   // {
//   //   src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
//   //   original: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
//   //   width: 320,
//   //   height: 213,
//   //   // tags: [
//   //   //   { value: "People", title: "People" },
//   //   //   { value: "Sport", title: "Sport" },
//   //   // ],
//   //   caption: "Man on BMX (Tom Eversley - isorepublic.com)",
//   // },
//   // {
//   //   src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
//   //   original: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
//   //   width: 320,
//   //   height: 213,
//   //   caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
//   // },
//   // {
//   //   src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
//   //   original: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
//   //   width: 320,
//   //   height: 213,
//   //   caption: "Time to Think (Tom Eversley - isorepublic.com)",
//   // },
// ];

// const slides = images.map(({ original, width, height }) => ({
//   src: original,
//   width,
//   height,
// }));

const tagItem = (): CSSProperties => ({
  display: "inline",
  padding: ".2em .6em .3em",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  color: "white",
  background: "rgba(0,0,0,0.65)",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "baseline",
  borderRadius: ".25em",
});

export const GalleryGrid = ({ title, gallery }:any) => {

  console.log(gallery);
  const [index, setIndex] = useState(-1);

  const currentImage = gallery && gallery[index];
  const nextIndex = (index + 1) % gallery && gallery.length;
  const nextImage = gallery && gallery[nextIndex] || currentImage;
  const prevIndex = (index + gallery && gallery.length - 1) % gallery && gallery.length;
  const prevImage = gallery && gallery[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery
        images={gallery}
        onClick={handleClick}
        enableImageSelection={false}
        tagStyle={tagItem}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          imageCaption={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          clickOutsideToClose={true}
          animationOnKeyInput={true}
          animationDuration={300}
          
        />
      )}
    </div>
  );
}