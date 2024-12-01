import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  console.log(videoId, snippet);

  return (
    <Card
      sx={{
        width: { xs: "92vw", sm: "358px", md: "300px" },
        boxShadow: "none",
        borderRadius: 2,
        margin: "6px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img" 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{
            width: {xs:'100%',sm:'358px', md:'300px'},
            height: { xs: 170, sm: 180 },
            objectFit: "cover", 
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: { xs: "auto", sm: "80px" }, 
          padding: { xs: 1, sm: 2 },
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            noWrap 
            sx={{
              display: "-webkit-box", 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray" mt={1} noWrap>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
