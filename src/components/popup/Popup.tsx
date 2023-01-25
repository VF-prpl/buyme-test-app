import React from "react";
import { Dialog, useMediaQuery } from "@mui/material";
import Button from "../Button";
import { useTheme } from "@mui/material/styles";
import PopupTitle from "./PopupTitle";
import PopupContent from "./PopupContent";

interface Props {
  text: string;
  children: React.ReactNode;
}

const Popup: React.FC<Props> = ({ text, children }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        text="Popup button"
        additionalStyles={{
          marginRight: 2,
          flexGrow: 1,
          backgroundColor: "orange",
          width: "135px !important",
          border: "1px solid black !important",

          "&:hover": {
            backgroundColor: "#f49606 !important",
          },
        }}
      />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <PopupTitle id="responsive-dialog-title" onClose={handleClose}>
          {text}
        </PopupTitle>
        <PopupContent>{children}</PopupContent>
      </Dialog>
    </div>
  );
};

export default Popup;
