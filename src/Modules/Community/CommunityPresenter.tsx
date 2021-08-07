import React from "react";
import ReviewList from "./ReviewList";
import Box from "@material-ui/core/Box";
import { maxWidth } from "@material-ui/system";
import "./index.css";

const CommunityPresenter = () => {
  return (
    <Box display="flex" justifyContent="center">
      {/* <Box maxWidth="600px"> */}
      <ReviewList></ReviewList>
      {/* </Box> */}
    </Box>
  );
};

export default CommunityPresenter;
