import PropTypes from 'prop-types';
import {logDOM} from '@testing-library/react';
import styled from 'styled-components';

const TvShowDetails = ({ tvShow} ) => {
  return(
    <div>
      <Title>{tvShow.name}</Title>
      <Rating>{tvShow.vote_average / 2}</Rating>
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
  font-weight: 400`
const Rating = styled.div``
const Overview = styled.div``
export default TvShowDetails