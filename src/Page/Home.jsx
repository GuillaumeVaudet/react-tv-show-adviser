import {TVShowAPI} from '../api/tv-show';
import styled from 'styled-components';

TVShowAPI.fetchPopulars()
const Home = () => {
  return(
    <MainContainer>
      <Header>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar type="text"/>
          </div>
        </div>
      </Header>
      <TvShowDetail>Details</TvShowDetail>
      <Recommendations>Recommendations</Recommendations>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 25px;
`
const Header = styled.div`
  flex: 1;
  background-color: red;
`
const TvShowDetail = styled.div`
  flex: 2;
  background-color: blue;
`
const Recommendations = styled.div`
  flex: 1;
  background-color: green;
`
const SearchBar = styled.input`
  width: 100%;
`
export default Home