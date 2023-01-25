import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  main__container: {
    border: "1px solid black",
    margin: "10% 10% 5% 10%",
    height: "70vh",
    display: "flex",

    "@media (max-width: 700px)": {
      marginTop: "20%",
    },
  },

  main__paragraph: {
    margin: "auto !important",
  },
}));

const Page: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box component="main" className={classes.main__container}>
      {children}
    </Box>
  );
};

export default Page;
