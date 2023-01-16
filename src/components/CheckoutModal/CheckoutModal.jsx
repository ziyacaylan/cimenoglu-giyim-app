import React, { useState } from "react";
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
import { toast } from "react-hot-toast";
import { nanoid } from "@reduxjs/toolkit";

import { addDataToFirestore } from "../../utils/firebase/firebase.utils";

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
  const { basket, total, amount } = useSelector((state) => state.basket);
  const user = useSelector((state) => state.auth.user);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState(user.email);
  const [fullName, setFullName] = useState(user.displayName);
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");

  const handleChangeCountry = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      orderId: nanoid(),
      date: new Date(),
      orderSummary: "Order Completed",
      uid: user?.uid,
      email,
      fullName,
      address,
      postCode,
      city,
      country,
      basket,
      total,
      amount,
    };
    const data = await addDataToFirestore(order, "orders");
    if (data) {
      toast.success("Order Completed...!");
      handleClose();
    } else {
      toast.error(data.error.message);
    }
  };
  //console.log(user);
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "100%", mt: "15px" }}
          >
            <FormGroup>
              <FormControl>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    mb: "20px",
                  }}
                >
                  <MailOutlineIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    required
                    variant="standard"
                    fullWidth
                    mt="10px"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <TextField
                id="fullName"
                name="fullName"
                required
                label="Full Name"
                variant="filled"
                fullWidth
                mt="10px"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
            {/* Address */}
            <FormGroup>
              <TextField
                id="address"
                name="address"
                required
                label="Address"
                variant="filled"
                fullWidth
                mt="10px"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
            {/* PostCode & City */}
            <Box sx={{ display: "flex" }}>
              {/* PostCode */}
              <FormGroup>
                <TextField
                  id="postCode"
                  name="postCode"
                  required
                  label="PostCode"
                  type="number"
                  variant="filled"
                  fullWidth
                  mt="10px"
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </FormGroup>
              {/* City */}
              <FormGroup>
                <TextField
                  id="city"
                  name="city"
                  required
                  label="City"
                  variant="filled"
                  fullWidth
                  mt="10px"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormGroup>
            </Box>
            <FormGroup>
              <FormControl variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel id="country">Country</InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  name="country"
                  required
                  value={country}
                  onChange={handleChangeCountry}
                >
                  {/* <MenuItem value="" key={0}>
                    <em>None</em>
                  </MenuItem> */}
                  {countries.map((country) => (
                    <MenuItem value={country.label} key={countries.phone}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FormGroup>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: "10px" }}
              type="submit"
            >
              {`Pay Now  ${total} $`}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default CheckoutModal;
