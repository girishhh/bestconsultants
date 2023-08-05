import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  SvgIcon,
  Button,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const donateForm = () => {
    navigate("/donate");
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      color="default"
    >
      <Toolbar sx={{padding: '0px !important'}}>
        <NavLink
          to="/"
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
        >          
        </NavLink>

        <Box sx={{ display: { xs: "none", md: "flex" } }} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
