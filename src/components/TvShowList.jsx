import PropTypes from 'prop-types';
import TvShowListItem from './TvShowListItem';
import styled from 'styled-components';

const TvShowList = ({tvShowList, onClickItem}) => {
  return(
    <>
      <Title>You may also like:</Title>
      <ListWrapper>
        {tvShowList.map((tvShow)=>{
          return(
            <ItemCard
              key={ tvShow.id }>
              <TvShowListItem
                tvShow={ tvShow }
                onClick={ onClickItem } />
            </ItemCard>
          )
        })}
      </ListWrapper>
    </>)
}

TvShowList.propTypes = {
  tvShowList: PropTypes.array,
  onClickItem: PropTypes.func
}


const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 20px;
`
const ListWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 30px;
  &:hover{
    overflow-x: scroll;
  }
`
const ItemCard = styled.span`
  margin-right: 20px;
`
export default TvShowList