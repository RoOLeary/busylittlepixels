import { CSSProperties, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Image } from "react-grid-gallery";

// eslint-disable-next-line
export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "https://source.unsplash.com/1000x600/?code",
    original: "https://source.unsplash.com/1000x600/?code",
    width: 320,
    height: 174,
    // tags: [
    //   { value: "Nature", title: "Nature" },
    //   { value: "Flora", title: "Flora" },
    // ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://source.unsplash.com/1000x600/?tech",
    original: "https://source.unsplash.com/1000x600/?tech",
    width: 320,
    height: 212,
    // tags: [
    //   { value: "Rick", title: "Rick" },
    //   { value: "Morty", title: "Morty" },
    // ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://source.unsplash.com/1000x600/?webdesign",
    original: "https://source.unsplash.com/1000x600/?webdesign",
    width: 320,
    height: 212,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: "https://source.unsplash.com/1000x600/?typescript",
    original: "https://source.unsplash.com/1000x600/?typescript",
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: "https://source.unsplash.com/1000x600/?coffee",
    original: "https://source.unsplash.com/1000x600/?coffee",
    width: 320,
    height: 183,
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: "https://source.unsplash.com/300x600/?video",
    original: "https://source.unsplash.com/300x600/?video",
    width: 240,
    height: 320,
    // tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: "https://source.unsplash.com/1000x600/?amsterdam",
    original: "https://source.unsplash.com/1000x600/?amsterdam",
    width: 320,
    height: 190,
    caption: "286H (gratisography.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    width: 320,
    height: 148,
    // tags: [{ value: "People", title: "People" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    width: 320,
    height: 213,
    caption: "201H (gratisography.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    original: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    alt: "Big Ben - London",
    width: 248,
    height: 320,
    caption: "Big Ben (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    original: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    alt: "Red Zone - Paris",
    width: 320,
    height: 113,
    // tags: [{ value: "People", title: "People" }],
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    original: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    alt: "Wood Glass",
    width: 313,
    height: 320,
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    original: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    width: 320,
    height: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    original: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    width: 320,
    height: 194,
    caption: "Old Barn (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    original: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    alt: "Cosmos Flower",
    width: 320,
    height: 213,
    caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    original: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    width: 271,
    height: 320,
    caption: "Orange Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    original: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    width: 320,
    height: 213,
    // tags: [
    //   { value: "Nature", title: "Nature" },
    //   { value: "People", title: "People" },
    // ],
    caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    original: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    width: 320,
    height: 213,
    // tags: [
    //   { value: "People", title: "People" },
    //   { value: "Sport", title: "Sport" },
    // ],
    caption: "Man on BMX (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    original: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    width: 320,
    height: 213,
    caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    original: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    width: 320,
    height: 213,
    caption: "Time to Think (Tom Eversley - isorepublic.com)",
  },
];

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

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

export const GalleryGrid = () => {

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery
        images={images}
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