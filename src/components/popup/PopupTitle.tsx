import React from "react";
import { IconButton, DialogTitle, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  "popup__title-text": {
    display: "flex",
    justifyContent: "center",
  },
}));

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const PopupTitle = (props: DialogTitleProps) => {
  const classes = useStyles();
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        borderBottom: "1px solid black",
        backgroundColor: "lightgray",
      }}
      {...other}
    >
      <Box className={classes["popup__title-text"]}>{children}</Box>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
            backgroundColor: "#f49606",
            border: "1px solid black",
            borderRadius: 0,

            "&:hover": {
              backgroundColor: "#f49606",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default PopupTitle;
