// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
let term = "blah"
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + term
            + `api-key=${NYT_API_KEY}`;




export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state ={
      searchTerm: "",
      reviews: []

    }
  }

  searchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  findMovie = (event) => {
    event.preventDefault()
    console.log(this.state)
    term = this.state.searchTerm
  }

  fetchTime = () => {
    fetch(URL).then(resp => resp.json()).then(foundReviews => {this.setState({reviews: foundReviews.results})})
  }


  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.findMovie}>
        <input type="text" name="title" onChange={this.searchTerm} />
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}
