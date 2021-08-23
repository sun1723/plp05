import React, { Component } from "react";
import ProductInput from "./ProductInput";
import ProductList from "./ProductList";
import axios from "axios";

class PlpApp extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  handleSubmitSearch(content) {
    var that = this;
    if(!content) return
    const options = {
      method: "GET",
      url: "https://gearbest.p.rapidapi.com/search",
      params: { query: content, page: "1" },
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
	    that.setState({
		    products:response.data.data
	    })  
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  handleSort(sort) {
    console.log(sort);
  }
  render() {
    return (
      <div className='wrapper'>
        <ProductInput
          onSubmit={this.handleSubmitSearch.bind(this)}
          onSubmitSort={this.handleSort.bind(this)}
        />
        <ProductList />
      </div>
    );
  }
}

export default PlpApp;
