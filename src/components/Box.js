import PropTypes from "prop-types";
import React, { Component } from "react";

export class Box extends Component {
  static propTypes = {};

    constructor(){
        super();
        console.log("constructor passed");
    }

  render() {
      let {title, description, imgUrl}  = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
Box.defaultProps = {
    title : "default title",
    description : "default description"    
}


export default Box;
