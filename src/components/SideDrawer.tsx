import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Popup from "./popup/Popup";
import TextField, { TextFieldInputType } from "./TextField";
import navItems from "../mocks/NavigationLabels.json";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box onClick={onClose} sx={{ textAlign: "center" }}>
          <Popup text="Popup title">
            <TextField
              placeholder="Input"
              inputType={TextFieldInputType.text}
            />
          </Popup>
          <Divider />
          <List>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.url}
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItem key={item.label} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
