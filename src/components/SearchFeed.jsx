import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>

      {isLoading ? (
        <Typography variant="h6" color="gray">Loading...</Typography>
      ) : videos.length > 0 ? (
        <Videos videos={videos} />
      ) : (
        <Typography variant="h6" color="gray">No results found for "{searchTerm}".</Typography>
      )}
    </Box>
  );
};

export default SearchFeed;
