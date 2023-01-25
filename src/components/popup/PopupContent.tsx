import React from "react";
import { DialogContent, DialogContentText } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  "popup__content-input": {
    display: "flex",
    justifyContent: "end",
    paddingTop: 30,
  },
}));

interface Props {
  children: React.ReactNode;
}

const PopupContent: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <DialogContent
      sx={{
        "@media (min-width: 700px)": {
          height: "400px",
          width: "500px",
        },
      }}
    >
      <DialogContentText className={classes["popup__content-input"]}>
        {children}
      </DialogContentText>
    </DialogContent>
  );
};

export default PopupContent;
