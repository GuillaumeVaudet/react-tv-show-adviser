import {string} from 'prop-types';
import styled from 'styled-components';

const Logo = ({image, title, subtitles}) => {
  return(
    <>
      <Container>
        <Image src={ image } alt=""/>
        <TitleWrapper>{title}</TitleWrapper>
      </Container>
      <SubtitlesWrapper>{subtitles}</SubtitlesWrapper>
    </>
  )
}

Logo.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  subtitles: string.isRequired
}

const Container = styled.div`
  display: flex;
`
const TitleWrapper = styled.span`
  font-size: 25px;
  font-weight: 400;
  padding-top: 5px;
  padding-left: 5px;
`
const SubtitlesWrapper = styled.span`
  margin-left: 7px;
  white-space: nowrap;
`
const Image =styled.img`
  height: 40px;
  width: 40px;
`
export default Logo