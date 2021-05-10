import React from "react";
const Button = ({ showMore }) => {

  return (
    <button className="Button" type="button" onClick={showMore}>
      Load more
    </button>
  );
};

export default Button;
