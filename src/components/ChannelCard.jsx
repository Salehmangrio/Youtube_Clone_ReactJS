import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent,CardMedia,Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'
import {demoProfilePicture} from '../utils/constants'

const ChannelCard = ({channelDetail}) =>(
    <Box 
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:'326px',
      width:{xs:'356px',md:'320px'},
      margin:'auto',
    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        textAlign: 'center',
        color:'#fff'
      }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            height: '180px',
            width: '180px',
            objectFit: 'cover',
            borderRadius: '50%',
            mb:2,border: '1px solid #e3e3e3'
          }}
        />
      <Typography variant='h6' fontWeight='bold'>
        {channelDetail?.snippet?.title}
        <CheckCircle
              sx={{ fontSize: 14, color: "gray", ml: "5px" }}
            />
      </Typography>


      </CardContent>
      </Link>

    </Box>
  )


export default ChannelCard