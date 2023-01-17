import React from "react";
import AppBar from "@mui/material/AppBar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Button,
  Link,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "footer",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "fixed",
        fontFamily: "Saira Extra Condensed",
        bottom: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid container xs={12} mb={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                mb: 3,
              }}
            >
              <Typography color="footerTextColor" variant="h6" mb={2} px={1}>
                Cimenoglu Wear Ltd.Sti.
              </Typography>
              <Link href="/" underline="hover" color="footerTextColor">
                Who are we _?
              </Link>
              <Link href="/" underline="hover" color="footerTextColor">
                Vision & Mission
              </Link>
              <Link href="/" underline="hover" color="footerTextColor">
                Our Partners
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                mb: 3,
              }}
            >
              <Typography color="footerTextColor" variant="h6" mb={2} px={1}>
                Social Media
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  my: 1,
                  minWidth: "50%",
                  backgroundColor: "linkedinCustom",
                  color: "footerTextColor !important",
                }}
                startIcon={<LinkedInIcon />}
              >
                Linkedin
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  my: 1,
                  minWidth: "50%",
                  backgroundColor: "githubCustom",
                  color: "footerTextColor !important",
                }}
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                mb: 3,
              }}
            >
              <Typography color="footerTextColor" variant="h6" mb={2} px={1}>
                Contact
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  my: 1,
                  minWidth: "50%",
                  backgroundColor: "mailCunstomButton",
                  color: "footerTextColor !important",
                }}
                startIcon={<MailOutlineIcon />}
              >
                mail
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  my: 1,
                  minWidth: "50%",
                  backgroundColor: "portfolioCustom",
                  color: "footerTextColor !important",
                }}
                startIcon={<AccountCircleIcon />}
              >
                Portfolıo
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                mb: 3,
              }}
            >
              <Typography color="footerTextColor" variant="h6" mb={2} px={1}>
                Help
              </Typography>
              <Link href="/" underline="hover" color="footerTextColor">
                Personal Data Protection
              </Link>
              <Link href="/" underline="hover" color="footerTextColor">
                How can I return it?
              </Link>
              <Link href="/" underline="hover" color="footerTextColor">
                Frequently Asked Questions
              </Link>
            </Grid>
          </Grid>
          <Divider
            sx={{
              borderColor: "greyCustomColor",
              my: 2,
              width: "85%",
            }}
          />
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "greyCustomColor",
                fontFamily: "Saira Extra Condensed",
                fontSize: 18,
              }}
            >
              {`Copyright ${new Date().getFullYear()}  © Cimenoglu Wear Store | Developer by Ziya ÇAYLAN `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
