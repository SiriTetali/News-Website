import React, { Component } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    console.log("rendering");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    try {
      let data = await fetch(url);
      let passedData = await data.json();
      console.log(passedData);
      this.setState({
        articles: passedData.articles || [],
        totalResults: passedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrev = async () => {
    this.setState((prevState) => ({
      page: prevState.page - 1,
    }), this.updateNews);
  };

  handleNext = async () => {
    if (
      !(this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize))
    ) {
      this.setState((prevState) => ({
        page: prevState.page + 1,
      }), this.updateNews);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px 0", marginTop:" 90px " }}>
          Headlines Today
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title : ""}
                  description={ele.description ? ele.description : ""}
                  imageUrl={ele.urlToImage}
                  newsUrl={ele.url}
                  published={ele.publishedAt}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
