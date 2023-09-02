import PropTypes from 'prop-types';
import { SMALL_COVER_IMAGE_BASE_URL } from '../config'
import styled from 'styled-components';

const TvShowListItem = ({ tvShow, onClick }) => {
  return(
    <Container onClick={ () => onClick(tvShow) }>
      <Image
        src={ `${ SMALL_COVER_IMAGE_BASE_URL }${ tvShow.backdrop_path }` }
        alt={ tvShow.name }/>
      <TitleWrapper>{ tvShow.name }</TitleWrapper>
    </Container>)
}

TvShowListItem.propTypes = {
  tvShow: PropTypes.shape({
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
  }),
  onClick: PropTypes.func
}

const Container = styled.div`
  cursor: pointer;
  width: 300px;
  position: relative;
`
const Image = styled.img`
  border-radius: 10px;
`
const TitleWrapper = styled.div`
  position: absolute;
  margin-top: -40px;
  height: 40px;
  width: 300px;
  padding: 8px 20px 0 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 10px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export default TvShowListItem