import { Stack, Box } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  
  if (!videos || !Array.isArray(videos)) {
    return <div>Loading videos...</div>; 
  }

  return (
    <Stack 
    direction="row" 
    flexWrap="wrap" justifyContent="start" gap={1}
    margin="auto"
    >
      {videos.map((item, ind) => (
        <Box key={ind}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
