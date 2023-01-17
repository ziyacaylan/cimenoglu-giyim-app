import { amber, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#0277bd",
          },
          divider: "#1A120B",
          footer: "#0277bd",
          footerTextColor: "#efffff",
          greyCustomColor: "#616161",
          linkedinCustom: "#00e5ff",
          githubCustom: "#24292f",
          portfolioCustom: "#795548",
          mailCunstomButton: "#4caf50",
          background: {
            default: "#eeeeee",
            paper: "#eceff1",
          },
          text: {
            primary: "#212121",
            secondary: "#71717a",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#e65100",
          },
          divider: "#fafafa",
          footer: "#172435",
          footerTextColor: "#e65100",
          greyCustomColor: "#e0e0e0",
          linkedinCustom: "#ff6d00",
          githubCustom: "#263238",
          portfolioCustom: "#424242",
          mailCunstomButton: "#1b5e20",
          background: {
            default: "#000e21",
            paper: "#000e21",
          },
          text: {
            primary: "#fff",
            secondary: "#71717a",
          },
        }),
  },
});
