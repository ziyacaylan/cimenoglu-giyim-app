import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClearIcon from "@mui/icons-material/Clear";
import CardMedia from "@mui/material/CardMedia";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import PaymentIcon from "@mui/icons-material/Payment";

import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  removeProduct,
  calculateTotals,
} from "../../store/basket/basketSlice";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { toast } from "react-hot-toast";

export const Checkout = () => {
  const basket = useSelector((state) => state.basket.basket);
  const total = useSelector((state) => state.basket.total);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [basket]);

  const handleOpen = () =>
    basket.length > 0 ? setOpen(true) : toast.error("Basket is empty");
  const handleClose = () => setOpen(false);

  //console.log(basket);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>PRODUCT</TableCell>
                  <TableCell align="right">DESCRIPTION</TableCell>
                  <TableCell align="right">QUANTITY</TableCell>
                  <TableCell align="right">PRICE</TableCell>
                  <TableCell align="right">REMOVE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {React.Children.toArray(
                  basket.map((product) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <CardMedia
                          component="img"
                          height="194"
                          image={product.imageUrl}
                          alt="Paella dish"
                        />
                      </TableCell>
                      <TableCell align="right">{product.name}</TableCell>
                      <TableCell align="right">
                        <ButtonGroup>
                          <Button
                            aria-label="reduce"
                            onClick={() => dispatch(decrease(product))}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <Paper
                            variant="outlined"
                            sx={{
                              borderColor: "primary.main",
                              width: "50px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            square
                          >
                            {product.amount}
                          </Paper>
                          <Button
                            aria-label="increase"
                            onClick={() => dispatch(increase(product))}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell align="right">{`$ ${product.price}`}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => dispatch(removeProduct(product.id))}
                        >
                          <ClearIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <TableContainer
            component={Paper}
            sx={{ marginBottom: "20px", minWidth: 350 }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Box textAlign="left" marginBottom={0}>
                      <InputLabel
                        shrink
                        htmlFor="coupon-code"
                        sx={{ marginLeft: "15px", textAlign: "left" }}
                      >
                        Have Coupon ?
                      </InputLabel>
                      <TextField
                        id="coupon-code"
                        size="small"
                        label="Coupon Code"
                        variant="outlined"
                        sx={{ margin: "10px" }}
                      />
                    </Box>
                    <Button variant="contained" sx={{ margin: "10px" }}>
                      Apply
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            sx={{ marginTop: "10px", minWidth: 350 }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "10px",
                      }}
                    >
                      <Box component="span">Total Price</Box>
                      <Box component="span" fontWeight="bold">
                        {`$ ${total}`}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "10px",
                      }}
                    >
                      <Box component="span">Discourt</Box>
                      <Box component="span" fontWeight="bold">
                        {`$ 0`}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "10px",
                      }}
                    >
                      <Box component="span">Total</Box>
                      <Box component="span" fontWeight="bold">
                        {total}
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: "primary.main" }} />
                    <Button
                      variant="contained"
                      sx={{ marginTop: "10px" }}
                      onClick={handleOpen}
                      fullWidth
                      startIcon={<PaymentIcon />}
                    >
                      pay now
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <CheckoutModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};
export default Checkout;
