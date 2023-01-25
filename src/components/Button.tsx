import React from "react";
import { Button as MUIButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  "navigation__item-button": {
    border: "1px solid black !important",
    "&:hover": {
      backgroundColor: "#e3dada !important",
      border: "1px solid black !important",
    },
  },
}));

type AriaHaspopup = "true";

interface Props {
  text: string;
  onClick: () => void;
  additionalStyles?: Record<string, unknown>;
  id?: string;
  ariaControls?: string | undefined;
  ariaExpanded?: boolean | undefined;
  ariaHaspopup?: AriaHaspopup;
}

const Button: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <MUIButton
      onClick={props.onClick}
      key={props.text}
      sx={{
        color: "black",
        backgroundColor: "white",
        textTransform: "none",
        width: "135px",
        borderRadius: 0,
        ...props.additionalStyles,
      }}
      className={classes["navigation__item-button"]}
      variant="outlined"
      id={props.id}
      aria-controls={props.ariaControls}
      aria-expanded={props.ariaExpanded}
      aria-haspopup={props.ariaHaspopup}
    >
      {props.text}
    </MUIButton>
  );
};

export default Button;
