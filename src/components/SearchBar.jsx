import PropTypes from 'prop-types';
import { Search } from 'react-bootstrap-icons'
import styled from 'styled-components';

const SearchBar = ({ onSubmit }) => {
  function submit(e){
    if(e.key === "Enter" && e.target.value.trim()!==""){
      onSubmit(e.target.value)
    }
  }
  return(
    <>
      <SearchIcon size={ 27 }/>
      <InputSearch
        type="text"
        placeholder="Search a tv show you may like"
        onKeyUp={ submit } />
    </>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
}

const InputSearch = styled.input`
  width: 100%;
  border-radius: 30px;
  background-color: #d9d9d96e;
  height: 30px;
  font-weight: 100;
  font-size: 20px;
  border-color: transparent;
  padding: 18px 18px 18px 50px;
  color: white;

  &::placeholder{
    color: rgb(194, 194, 194);
  }
  &:focus{
    border: 1px solid white;
    outline: none;
  }
`
const SearchIcon = styled(Search)`
  position: absolute;
  margin-top: 7px;
  margin-left: 15px;
`
export default SearchBar