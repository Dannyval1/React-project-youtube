import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const FeedSkeleton = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ margin: 2 }}>
        <Skeleton variant="rectangular" width={350} height={250} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Box>
    </Box>
  );
};

export default FeedSkeleton;
