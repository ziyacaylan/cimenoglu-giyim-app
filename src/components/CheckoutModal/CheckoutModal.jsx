import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { useSelector } from "react-redux";
import image from "../../assets/crown.svg";
import { Divider } from "@mui/material";
import { countries } from "../../utils/Country/country";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const CheckoutModal = ({ handleOpen, handleClose, open }) => {
  const { total } = useSelector((state) => state.basket);
  const user = useSelector((state) => state.auth.user);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(user);
  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.paper",
              borderRadius: "50%",
              border: 3,
              borderColor: "primary.main",
              color: "red",
              width: "75px",
              height: "75px",
              top: "-11.5%",
              left: "48%",
              transform: "translate(-40%, 20%)",
            }}
          >
            <img
              src={image}
              style={{ idth: "48px", height: "48px" }}
              alt="cimenoglu giyim app"
            />
          </Box>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              mt: 1,
              fontFamily: "Saira Extra Condensed",
            }}
          >
            Çimenoğlu Giyim Ltd.Sti
          </Typography>
          <Typography
            id="keep-mounted-modal-title"
            variant="span"
            component="span"
            sx={{
              display: "block",
              textAlign: "center",
              fontFamily: "Saira Extra Condensed",
              fontSize: "1rem",
              letterSpacing: 1,
            }}
          >
            {`Your Total is $${total}`}
          </Typography>
          <Divider sx={{ borderColor: "primary.main" }} />

          {/* ************************** Form Start *********************************** */}
          <Box component="form" sx={{ width: "100%", mt: "15px" }}>
            <FormGroup>
              <Box sx={{ display: "flex", alignItems: "flex-end", mb: "20px" }}>
                <MailOutlineIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  mt="10px"
                  value={user ? user.email : ""}
                />
              </Box>
            </FormGroup>
            <FormGroup>
              <TextField
                id="fullName"
                label="Full Name"
                variant="filled"
                fullWidth
                mt="10px"
                value={user ? user.displayName : ""}
              />
            </FormGroup>
            {/* Address */}
            <FormGroup>
              <TextField
                id="address"
                label="Address"
                variant="filled"
                fullWidth
                mt="10px"
              />
            </FormGroup>
            {/* PostCode & City */}
            <Box sx={{ display: "flex" }}>
              {/* PostCode */}
              <FormGroup>
                <TextField
                  id="postCode"
                  label="PostCode"
                  type="number"
                  variant="filled"
                  fullWidth
                  mt="10px"
                />
              </FormGroup>
              {/* City */}
              <FormGroup>
                <TextField
                  id="city"
                  label="City"
                  variant="filled"
                  fullWidth
                  mt="10px"
                />
              </FormGroup>
            </Box>
            <FormGroup>
              <FormControl variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem value={country.label}>{country.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FormGroup>
            <Button variant="contained" fullWidth sx={{ mt: "10px" }}>
              {`Pay Now    ${total} $`}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default CheckoutModal;
