// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({title, review}) => {
  return (
      <div className="review-list">
        <h3>{title}</h3>
        <h3>{review}</h3>
      </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

//
// export default class MovieReviews extends React.Component {
//   render(){
//     return <SingleReview />
//   }
// }

export default MovieReviews
