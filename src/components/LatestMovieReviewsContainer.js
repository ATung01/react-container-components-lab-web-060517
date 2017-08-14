import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
const ReviewList = ({allReviews}) => {

  return (
      <div className="movie-reviews">
        {allReviews.map(
          review => <MovieReviews title={review.headline} review={review.summary_short} />
        )}
      </div>
  )

}


export default class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state ={
      reviews: []
    }
  }
  componentDidMount() {
    fetch(URL).then(resp => resp.json()).then(allReviews => {this.setState({reviews: allReviews.results})})

  }


  render(){
    return (
      <div className="latest-movie-reviews">
        <ReviewList allReviews={this.state.reviews} />
      </div>
    )
  }


}
