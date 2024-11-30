import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Channel Detail
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    // Channel Videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (videos) => setVideos(videos?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* Channel Banner */}
      <Box>
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,255,126,1) 51%, rgba(9,9,121,1) 91%)",
            zIndex: 10,
            width: "100%",
            height: {
              xs: "170px", // Mobile
              sm: "250px", // Tablets
              md: "300px", // Laptops
              lg: "350px", // Large screens
            },
          }}
        />

        {channelDetail && (
          <ChannelCard
            marginTop="-110px"
            channelDetail={channelDetail}
          />
        )}
      </Box>

      <Box display="flex" p="2" justifyContent="center"> 
        <Box sx={{mr:{sm:'108px',xs:'14px'}}}/>
          <Videos videos={videos}/>

      </Box>
    </Box>
  );
};

export default ChannelDetail;
