import { useState, useEffect } from 'react';
import { Typography, Box, Stack, useTheme, useMediaQuery } from '@mui/material';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import { useParams, NavLink } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './'

const VideoDetail = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items?.[0]))
      .catch((error) => console.error("Error fetching video details:", error));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data?.items));
  }, [id]);


  if (!videoDetail) {
    return (
      <Box minHeight="95vh" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h5" color="gray">
          Loading video...
        </Typography>
      </Box>
    );
  }

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" p={5} gutterBottom color="#fff" fontWeight="bold">
              {title}
            </Typography>
            <Stack direction="row" justifyContent='space-between' sx={{
              color: '#fff',
            }} py={1} px={5}>
              <NavLink to={`/channel/${channelId}`}>
                <Typography color='#fff'
                  variant={isSmallScreen ? 'subtitle1' : 'h6'}
                >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
              </NavLink>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center'>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
