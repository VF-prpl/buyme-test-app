import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "../SideDrawer";
import Button from "../Button";
import DropDown from "../DropDown";
import Popup from "../popup/Popup";
import TextField, { TextFieldInputType } from "../TextField";
import navItems from "../../mocks/NavigationLabels.json";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#28d4ce",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* We can handle local state inside the component - button-modal relation */}
            <Popup text="Popup title">
                <TextField placeholder="Input" inputType={TextFieldInputType.text} />
            </Popup>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.url}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  text={item.label}
                  onClick={() => console.log(`redirected to ${item.url}`)}
                  additionalStyles={{
                    marginRight: 2,
                  }}
                />
              </Link>
            ))}
            <DropDown />
          </Box>
        </Toolbar>
      </AppBar>

      {/* We can handle local state of components from the parent node like this */}
      <SideDrawer isOpen={isDrawerOpen} onClose={handleToggle} />
    </Box>
  );
};

export default Header;
