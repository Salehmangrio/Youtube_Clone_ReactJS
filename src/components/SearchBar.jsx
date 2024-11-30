import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material'


const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
    navigate(`/search/${searchTerm}`);

    setSearchTerm('');
  }
  }

  return (
    <Paper component="form"
    sx={{
      borderRadius: 20,
      border: '1px solid #e3e3e3',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 }
    }}
    onSubmit={handleSubmit}
    >
      <input className='search-bar'
        placeholder='search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
      </input>
      <IconButton type="submit" sx={{ color: "red", padding: '10px' }}>
        <Search />
      </IconButton>

    </Paper>
  )
}

export default SearchBar