import React from "react";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// function createData(id, product, quantity, price, totalPrice) {
//   return { id, product, quantity, price, totalPrice };
// }

// const rows = [
//   createData(1, "Frozen yoghurt", 2, 6.0, 12.0),
//   createData(2, "Frozen yoghurt", 2, 6.0, 12.0),
//   createData(3, "Frozen yoghurt", 2, 6.0, 12.0),
// ];

const OrderDetails = () => {
  const location = useLocation();
  const myOrder = location.state.order;
  const navigate = useNavigate();

  //console.log(myOrder);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Photo</TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {React.Children.toArray(
                  myOrder.basket.map((product, index) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index}
                      </TableCell>
                      <TableCell align="left">
                        <CardMedia
                          sx={{ height: 75, width: 75 }}
                          image={product.imageUrl}
                          title="green iguana"
                        />
                      </TableCell>
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="right">{product.amount}</TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                      <TableCell align="right">
                        {`$ ${product.amount * product.price}`}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={5}>
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
                        {`$ ${myOrder.total}`}
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
                        {myOrder.total}
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: "primary.main" }} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Box sx={{ my: 3, textAlign: "end" }}>
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          onClick={() => navigate("/profile/orders", { replace: true })}
        >
          Back Orders
        </Button>
      </Box>
    </Box>
  );
};
export default OrderDetails;
