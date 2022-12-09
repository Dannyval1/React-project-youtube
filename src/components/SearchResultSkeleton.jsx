import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";

const SearchResultSkeleton = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Skeleton variant="rectangular" width={450} height={250} />
        <Box sx={{ width: "100%", margin: 2 }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Skeleton />
          <Skeleton />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Skeleton variant="rectangular" width={450} height={250} />
        <Box sx={{ width: "100%", margin: 2 }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Skeleton />
          <Skeleton />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Skeleton variant="rectangular" width={450} height={250} />
        <Box sx={{ width: "100%", margin: 2 }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Skeleton />
          <Skeleton />
        </Box>
      </Box>
    </>
  );
};

export default SearchResultSkeleton;
