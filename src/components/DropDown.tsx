import React from "react";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Box,
} from "@mui/material";
import dropDownItems from "../mocks/DropDownItems.json";
import Button from "./Button";

const DropDown = () => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleDropdownToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box ref={anchorRef}>
      <Button
        text="Dropdown"
        onClick={handleDropdownToggle}
        id="composition-button"
        ariaControls={open ? "composition-menu" : undefined}
        ariaExpanded={open ? true : undefined}
        ariaHaspopup="true"
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  {dropDownItems.map((item) => (
                    <MenuItem
                      onClick={() => setOpen(false)}
                      key={item.id}
                      sx={{ width: "135px" }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default DropDown;
