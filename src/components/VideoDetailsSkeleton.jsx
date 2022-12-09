import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";

const VideoDetailsSkeleton = () => {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Skeleton variant="rectangular" width={280} height={120} />
        <Box sx={{ width: "100%", margin: 2 }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Box>
      </Box>
    </div>
  );
};

export default VideoDetailsSkeleton;
