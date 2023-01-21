// import PropTypes from "prop-types";
import React, { Component } from "react";
// import ReactCrop from 'react-image-crop'
export class Box extends Component {
//   static propTypes = {};

render() {
    let {title, description, urlToImage, url}  = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={urlToImage} className="card-img-top" alt="..." style={{height:200}} />
        <div className="card-body">
          <h5 className="card-title" style={{height:50}}>{title?title.slice(0,20):""}</h5>
          <p className="card-text" style={{height:100}}>
            {description?description.slice(0,100):""}
          </p>
          <a href={url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}


export default Box;
