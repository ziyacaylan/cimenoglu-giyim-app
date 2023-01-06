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
          divider: "#fde68a",
          background: {
            default: "#eeeeee",
            paper: "#fbbf24",
          },
          text: {
            primary: "#212121",
            secondary: "#27272a",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#e65100",
          },
          divider: "#004282",
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
