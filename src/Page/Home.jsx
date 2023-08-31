import {useEffect, useState} from 'react';
import {BACKDROP_BASE_URL} from '../config';
import Logo from '../components/Logo';
import {TVShowAPI} from '../api/tv-show';
import TvShowDetails from '../components/TvShowDetails';
import logo from '../assets/images/logo.png'
import styled from 'styled-components';

const Home = () => {
  const [currentTvShow, setCurrentTvShow] = useState()
  async function fetchPopulars(){
    const populars = await TVShowAPI.fetchPopulars()
    if(populars.length > 0){
      setCurrentTvShow(populars[0])
    }
  }

  useEffect(() => {
    fetchPopulars()
  }, []);
  return(
    <MainContainer style={ {
      background: currentTvShow
        ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`  : "black",} }>
      <Header>
        <div className="row">
          <div className="col-4">
            <Logo
              image={ logo }
              title="WhatToWatch"
              subtitles="Find a show you may like" />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar type="text"/>
          </div>
        </div>
      </Header>
      <Details>
        {currentTvShow && <TvShowDetails tvShow={ currentTvShow } />}
      </Details>
      <Recommendations>Recommendations</Recommendations>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 25px;
  background-color: black;
`
const Header = styled.div`
  flex: 1;
`
const Details = styled.div`
  flex: 2;
`
const Recommendations = styled.div`
  flex: 1;
`
const SearchBar = styled.input`
  width: 100%;
`
export default Home