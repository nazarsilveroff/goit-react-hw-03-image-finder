import React from "react";
const ImageGalleryItem = ({ image, largeImgHendler }) => {
    
  return (
    <>
      <li id={image.id} className="ImageGalleryItem">
        <img
          onClick={largeImgHendler}
          data-source={image.largeImageURL}
          src={image.webformatURL}
          alt={image.type}
          className="ImageGalleryItem-image"
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
