import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Search = () => {
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      {/* <Typography variant="caption" display="block" gutterBottom>
        Kriterler
      </Typography> */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item sx={{ backgroundColor: "primary.main" }}>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
          <div>fdgsfgsdfgsdfgsdfgsdfgsdfg</div>
        </Grid>
        <Grid item sx={{ backgroundColor: "primary.main" }}>
          <div
            style={{
              backgroundColor: "grey",
              display: "block",
              height: "100%",
            }}
          >
            sadfasfdasdfasdfasdfasdfasdf
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
