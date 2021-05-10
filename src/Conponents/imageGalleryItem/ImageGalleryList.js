import PropTypes from "prop-types";
import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGalleryList = ({ images, largeImgHendler }) => {
  return (
    <ul className="ImageGallery">
      {images?.map((image) => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          largeImgHendler={largeImgHendler}
        />
      ))}
    </ul>
  );
};

ImageGalleryList.propTypes = {
  largeImgHendler: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ImageGalleryList;
