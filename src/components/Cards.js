// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Box from "./Box";
import NewsJson from "./jsonFile/data.json";
// import NewsJson from "./jsonFile/small.json"

export class Cards extends Component {
  article = NewsJson.articles;
  constructor() {
    super();
    // console.log("constructor passed");
    this.state = {
      article: this.article,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?pageSize=10?sources=techcrunch&apiKey=8629268f6f5e4947aba4c00626389b7e";
    let data = await fetch(url);
    let dataJSON = await data.json();
    // console.log(dataJSON);
    this.setState({ article: dataJSON.article });
  }

  render() {
    return (
      <>
        <div className="container text-center my-3 ">
          <div className="row align-items-start row-cols-3">
            {this.state.article?.map((element) => {
              return (
                <div className="col my-3" key={element?.url}>
                  <Box
                    title={element?.title}
                    description={element?.description}
                    urlToImage={element?.urlToImage}
                    url={element?.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

Cards.defaultProps = {
  title: "default title",
  description: "default description",
};
export default Cards;
