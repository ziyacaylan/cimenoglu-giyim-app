import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import SearchPreview from "../../components/SearchPreview/SearchPreview";
import { Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import {
  addSearchCategory,
  addSearchPriceRange,
} from "../../store/search/searchSlice";
import { Troubleshoot } from "@mui/icons-material";

function valuetext(value) {
  return `${value}`;
}

const Search = () => {
  const [value, setValue] = React.useState([1, 200]);
  const searchText = useSelector((state) => state.search.searchText);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const [categoryChecked, setCategoryChecked] = useState(false);
  const [priceChecked, setpriceChecked] = useState(false);
  const [categoriesChecked, setCategoriesChecked] = useState(
    new Array(categories.length).fill(false)
  );
  const categoriesForSort = [...categories];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSearchClick = (index) => {
    !categoryChecked &&
      !priceChecked &&
      toast.error("choose a filter tool to search");

    !categoryChecked && dispatch(addSearchCategory([]));
    !priceChecked && dispatch(addSearchCategory([]));

    categoryChecked &&
      dispatch(
        addSearchCategory(
          categoriesForSort.filter(
            (item, index) => categoriesChecked[index] && item
          )
        )
      );
    priceChecked && dispatch(addSearchPriceRange(value));
  };

  const handleOnChange = (idx) => {
    setCategoriesChecked(
      categoriesChecked.map((item, index) => (index === idx ? !item : item))
    );
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item sm={12} md={3}>
          <Typography component="h6" variant="h6" fontWeight="bold">
            Filters
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            control={
              <Checkbox
                checked={categoryChecked}
                onChange={() => setCategoryChecked((prevState) => !prevState)}
              />
            }
            label={
              <Typography component="h6" variant="h6" fontWeight="bold">
                Categories
              </Typography>
            }
            sx={{ fontWeight: "bold" }}
          />
          <Divider sx={{ mb: 2 }} />
          <FormGroup sx={{ mb: 2 }}>
            {React.Children.toArray(
              categoriesForSort
                .sort((a, b) => a.c_id - b.c_id)
                .map((category, index) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={categoriesChecked[index]}
                        onChange={() => handleOnChange(index)}
                        disabled={!categoryChecked || false}
                      />
                    }
                    label={category.name.toUpperCase()}
                  />
                ))
            )}
          </FormGroup>

          {/* Price filter */}

          <FormControlLabel
            control={
              <Checkbox
                checked={priceChecked}
                onChange={() => setpriceChecked((prevState) => !prevState)}
              />
            }
            label={
              <Typography component="h6" variant="h6" fontWeight="bold">
                Price Range
              </Typography>
            }
            sx={{ fontWeight: "bold" }}
          />
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ width: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="standard-basic"
                type="number"
                label="min"
                variant="standard"
                sx={{ mr: 2 }}
                value={value[0]}
                onChange={(e) =>
                  priceChecked && setValue([Number(e.target.value), value[1]])
                }
                disabled={!priceChecked || false}
              />
              <TextField
                id="standard-basic"
                type="number"
                label="max"
                variant="standard"
                value={value[1]}
                onChange={(e) =>
                  priceChecked && setValue([value[0], Number(e.target.value)])
                }
                disabled={!priceChecked || false}
              />
            </Box>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={250}
              sx={{ mt: 2 }}
              disabled={!priceChecked || false}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{ my: 2 }}
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={9}>
          <SearchPreview categoryChecked priceChecked />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
