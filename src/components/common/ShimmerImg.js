import { Box, Skeleton } from "@mui/material";
import React, { useState } from "react";

const ShimmerImg = ({ src, alt, width, height, sx, shStyle }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <Box sx={shStyle}>
          <Skeleton
            variant="rectangular"
            // width={width || sxWidth || "100%"}
            // height={height || sxHeight || "100%"}
            width="100%"
            height="100%"
            animation="wave"
          />
        </Box>
      )}
      <img
        src={src}
        alt={alt}
        style={{
          display: isLoading ? "none" : "block",
          ...(width && { width }), // Apply width if width prop is present
          ...(height && { height }), // Apply height if height prop is present
          ...sx, // Merge additional styles
        }}
        onLoad={handleImageLoad}
      />
    </>
  );
};

export default ShimmerImg;
