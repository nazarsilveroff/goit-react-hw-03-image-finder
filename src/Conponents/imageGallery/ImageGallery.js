import axios from "axios";
import React, { Component } from "react";
import Button from "../button/Button";
import ImageGalleryList from "../imageGalleryItem/ImageGalleryList";

import Loader from "../loader/Loader";
import Modal from "../modal/Modal";
import Searchbar from "../searchbar/Searchbar";
import { Section } from "../section/Section";

const API = `21146300-df17acb11e029d73c17341eff`;
const URL = `https://pixabay.com/api/`;
const filterResults = `photo&orientation=horizontal`;

class ImageGallery extends Component {
  state = {
    shoModal: false,
    images: [],
    loader: false,
    query: "",
    page: 1,
    error: null,
    largeImg: "",
    perPage: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query && query !== "") {
      console.log(" new query", query);
      this.axiosData();
    } else if (query === prevState.query && page !== prevState.page) {
      console.log(`new page axiosData in, page ${page} page`);
      this.axiosData();
    }
  }

  axiosData = async () => {
    this.setState({ loader: true });
    const { query, page, perPage } = this.state;
    try {
      const { data } = await axios.get(
        `${URL}?q=${query}&page=${page}&key=${API}&image_type=${filterResults}&per_page=${perPage}`
      );
      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
      }));
      console.log(`axiosData by ${query} in  page ${page} `);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState((prevState) => ({
        loader: false,
      }));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  formSubmit = (query) => {
    this.setState({ query: "", page: 1, images: [] });
    this.setState({ query: query, page: 1, images: [] });
  };

  showMore = () => {
    console.log("showMore");
    this.setState((prevSt) => ({ page: prevSt.page + 1 }));
    
  };

  largeImgHendler = (e) => {
    const largeImageURL = e.target.dataset.source;
    this.setState({ largeImg: largeImageURL });
    this.hendelTogalModal();
  };
  hendelTogalModal = () => {
    this.setState((prevSt) => ({ shoModal: !prevSt.shoModal }));
  };
  render() {
    const { images, shoModal, loader, largeImg } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <Section>
          {loader ? (
            <Loader />
          ) : (
            <ImageGalleryList
              images={images}
              largeImgHendler={this.largeImgHendler}
            />
          )}
          {images.length > 0 && <Button showMore={this.showMore} />}
        </Section>
        <Modal
          open={shoModal}
          onClose={this.hendelTogalModal}
          largeImg={largeImg}
          loader={loader}
        />
      </>
    );
  }
}

export default ImageGallery;
