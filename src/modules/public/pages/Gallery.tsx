import React from "react";
import PhotoAlbum from "react-photo-album";
const Gallery = () => {
  const photos = [
    { src: "/img/2.jpg", width: 1600, height: 900 },
    { src: "/img/1.jpg", width: 800, height: 600 },
    { src: "/img/3.jpg", width: 1600, height: 900 },
    { src: "/img/4.jpg", width: 800, height: 600 },
    { src: "/img/6.jpg", width: 800, height: 600 },
    { src: "/img/7.jpg", width: 1600, height: 900 },
    { src: "/img/8.jpg", width: 800, height: 600 },
    { src: "/img/9.jpg", width: 1600, height: 900 },
    { src: "/img/10.jpg", width: 800, height: 600 },
    { src: "/img/11.jpg", width: 1600, height: 900 },
    { src: "/img/12.jpg", width: 800, height: 600 },
    { src: "/img/13.jpg", width: 1600, height: 900 },
    { src: "/img/14.jpg", width: 800, height: 600 },
    { src: "/img/15.jpg", width: 1600, height: 900 },
    { src: "/img/16.jpg", width: 800, height: 600 },
    { src: "/img/17.jpg", width: 800, height: 600 },
    { src: "/img/18.jpg", width: 800, height: 600 },
    { src: "/img/19.jpg", width: 800, height: 600 },
    { src: "/img/20.jpg", width: 800, height: 600 },
    { src: "/img/21.jpg", width: 800, height: 600 },
    { src: "/img/22.jpg", width: 800, height: 600 },
    { src: "/img/23.jpg", width: 800, height: 600 },
    { src: "/img/24.jpg", width: 800, height: 600 },
    { src: "/img/25.jpg", width: 800, height: 600 },
    { src: "/img/26.jpg", width: 800, height: 600 },
    { src: "/img/27.jpg", width: 800, height: 600 },
    { src: "/img/28.jpg", width: 800, height: 600 },
    { src: "/img/29.jpg", width: 800, height: 600 },
    { src: "/img/30.jpg", width: 800, height: 600 },
    { src: "/img/31.jpg", width: 800, height: 600 },
    { src: "/img/32.jpg", width: 800, height: 600 },
    { src: "/img/33.jpg", width: 1600, height: 900 },
    { src: "/img/34.jpg", width: 800, height: 600 },
    { src: "/img/35.jpg", width: 1600, height: 900 },
    { src: "/img/36.jpg", width: 800, height: 600 },
    { src: "/img/37.jpg", width: 1600, height: 900 },
    { src: "/img/38.jpg", width: 800, height: 600 },
    { src: "/img/39.jpg", width: 1600, height: 900 },
    { src: "/img/40.jpg", width: 800, height: 600 },
    { src: "/img/41.jpg", width: 1600, height: 900 },
    { src: "/img/42.jpg", width: 800, height: 600 },
    { src: "/img/43.jpg", width: 1600, height: 900 },
    { src: "/img/44.jpg", width: 800, height: 600 },
    { src: "/img/45.jpg", width: 1600, height: 900 },
    { src: "/img/46.jpg", width: 800, height: 600 },
    { src: "/img/47.jpg", width: 1600, height: 900 },
    { src: "/img/48.jpg", width: 800, height: 600 },
    { src: "/img/50.jpg", width: 800, height: 600 },
    { src: "/img/51.jpg", width: 1600, height: 900 },
    { src: "/img/52.jpg", width: 800, height: 600 },
    { src: "/img/53.jpg", width: 1600, height: 900 },
    { src: "/img/54.jpg", width: 800, height: 600 },
    { src: "/img/55.jpg", width: 800, height: 600 },
  ];
  return (
    <div className=" mx-4 mt-20">
      <h2 className="m-6 my-12 pt-6 text-xl md:text-3xl   text-green-700">
        <span className=" font-bold">Explore Our Gallery:</span> A Visual Journey of
        Inspiration
      </h2>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
};

export default Gallery;
