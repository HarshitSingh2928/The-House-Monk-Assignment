import React, { useState } from 'react'
import github from '../icons/github_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ searchText, onSearchTextChange, onClearSearchText }) => {
    // const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    onSearchTextChange(event.target.value);

  };

//   const handleClearSearchText = () => {
//     setSearchText('');
//   };
  return (
    <div>
        
    <div className='profile_header'>
        <img src={github}></img>
        <h2>GitHub Profile Viewer</h2>
        
    </div>
    
    <div className="search-bar">
    <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="text"
          placeholder="Search User"
          value={searchText}
          onChange={handleSearchTextChange}
        />
         <button className="clear-search" onClick={onClearSearchText}>
            <span aria-hidden="true">&times;</span>
            <span className="visually-hidden">Clear search</span>
          </button>
      
      </div>
    </div>
  )
}

export default Header