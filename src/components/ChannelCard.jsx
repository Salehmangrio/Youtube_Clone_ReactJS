import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent,CardMedia,Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'
import {demoProfilePicture} from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop}) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '326px',
      width: { xs: "92vw", sm: "358px", md: "300px" },
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Added for centering
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          component="img" // Ensures proper rendering of the image
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            height: '180px',
            width: '180px',
            borderRadius: '50%',
            marginBottom: 2, // Consistent spacing
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
        </Typography>
        <Typography>
          {channelDetail?.statistics?.subscriberCount?.toLocaleString()} subscribers
          <br />
          {channelDetail?.statistics?.videoCount?.toLocaleString()} videos
        </Typography>
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
