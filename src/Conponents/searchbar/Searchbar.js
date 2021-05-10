import React, { Component } from "react";
import PropTypes from "prop-types";
class Searchbar extends Component {
  state = { imageQuery: "" };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  onHandlerSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.imageQuery);
  };
  onHandlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onHandlerSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              onChange={this.onHandlerChange}
              className="SearchForm-input"
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
              name="imageQuery"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
