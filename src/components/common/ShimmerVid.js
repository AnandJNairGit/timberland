import { Box, Skeleton } from "@mui/material";
import React, { useState } from "react";

const ShimmerVid = ({ src, width, height, shStyle }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <Box sx={shStyle}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        </Box>
      )}
      <video
        autoPlay
        muted
        loop
        // controls
        width={width}
        height={height}
        onLoadedData={handleVideoLoad}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default ShimmerVid;
