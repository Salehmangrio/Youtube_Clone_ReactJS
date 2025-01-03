import { Stack, Box } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos ,direction="row"}) => {
  
  if (!videos?.length) return 'Loading...';


  return (

    <Stack direction={direction} flexWrap="wrap" justifyContent="start" >

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
