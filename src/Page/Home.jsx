import {useEffect, useState} from 'react';
import {BACKDROP_BASE_URL} from '../config';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import {TVShowAPI} from '../api/tv-show';
import TvShowDetails from '../components/TvShowDetails';
import TvShowList from '../components/TvShowList';
import logo from '../assets/images/logo.png'
import styled from 'styled-components';

const Home = () => {
  const [currentTvShow, setCurrentTvShow] = useState()
  const [recommendations, setRecommendations] = useState([])
  async function fetchPopulars(){
    const populars = await TVShowAPI.fetchPopulars()
    if(populars.length > 0){
      setCurrentTvShow(populars[0])
    }
  }
  async function fetchRecommendations(tvShowId){
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId)
    if(recommendations.length > 0){
      setRecommendations(recommendations.slice(0, 10))
    }
  }

  useEffect(() => {
    fetchPopulars()
  }, []);

  useEffect(() => {
    if(currentTvShow){
      fetchRecommendations(currentTvShow.id)
    }
  }, [currentTvShow]);

  function setCurrentTvShowFromRecommendation(tvShow){
    alert(JSON.stringify(tvShow))
  }

  async function searchTvShow(TvShowName){
    const searchResponse = await TVShowAPI.fetchByTitle(TvShowName)
    if(searchResponse.length > 0 ){
      setCurrentTvShow(searchResponse[0])
    }
  }
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
            <SearchBar onSubmit={ searchTvShow }/>
          </div>
        </div>
      </Header>
      <Details>
        {currentTvShow && <TvShowDetails tvShow={ currentTvShow } />}
      </Details>
      <RecommendedShows>
        {recommendations && recommendations.length > 0 &&
          <TvShowList
            onClickItem={ setCurrentTvShow }
            tvShowList={ recommendations }/>}
      </RecommendedShows>
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
const RecommendedShows = styled.div`
`
export default Home