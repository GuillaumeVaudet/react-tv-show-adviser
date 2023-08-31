import FiveStarsRating from './FiveStarsRating';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TvShowDetails = ({ tvShow} ) => {
  const rating = tvShow.vote_average / 2
  return(
    <div>
      <Title>{tvShow.name}</Title>
      <RatingContainer>
        <FiveStarsRating rating={ rating } />
        <Rating>{rating}</Rating>
      </RatingContainer>
      <Overview>{tvShow.overview}</Overview>
    </div>)
}

TvShowDetails.propTypes = {
  tvShow: PropTypes.shape({
    name: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string
  })
};

const Title = styled.div`
  font-weight: 400;
  font-size: 35px;
`
const RatingContainer = styled.div`
  display: flex;
`
const Rating = styled.div`
  margin-top: 3px;
  margin-left: 5px;
`
const Overview = styled.div`
  font-family: Roboto,sans-serif;
  font-weight: 400;
  font-size: 20px;
  height: 120px;
  overflow-y: hidden;
  margin-top: 10px;
  
  &:hover{
    overflow-y: auto;
  }
`
export default TvShowDetails