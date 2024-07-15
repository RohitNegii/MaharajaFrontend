"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/navigation";
import styles from "../css/header.module.css";

const pages = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Menu",
    route: "/menu",
  },
  {
    name: "About Us",
    route: "/about",
  },
  {
    name: "Track order",
    route: "/track",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

import { userContext } from "@/app/context/context";
import Link from "next/link";

function Header() {
  const router = useRouter();
  let user = React.useContext(userContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (item) => {
    if (item.name == "Menu") {
      router.push(`${item.route}`);
    }
     if (item.name == "Home") {
       router.push(`${item.route}`);
     }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toogleLanguage = () => {
    user.setIsEnglish(!user.isEnglish);
  };

  console.log(user.isEnglish);

  return (
    <AppBar
      position="static"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <Container
        maxWidth="xl"
        style={{ backgroundColor: "var(--primaryColor)" }}
      >
        <Toolbar disableGutters>
          <div className={styles["header-wrapper"]}>
            <img src="/images/home/logo.png" className={styles["logo-img"]} />
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.name, page.route)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Reserve Table</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => toogleLanguage()}>
                  {user.isEnglish ? "Eng" : "Ger"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <div
            className={`${styles["header-wrapper"]} ${styles["header-for-mobile"]} `}
          >
            <img src="/images/home/logo.png" className={styles["logo-img"]} />
          </div>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "2%",
              marginRight: "3%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
                style={{ fontSize: "1rem" }}
              >
                {page.name}
              </Button>
            ))}
            <Button
              variant="outlined"
              style={{
                color: "#fff",
                borderColor: "var(--primaryYellow)",
                alignSelf: "center",
                fontSize: "1rem",
              }}
            >
              RESERVE TABLE
            </Button>
            <Button
              variant="outlined"
              style={{
                color: "#fff",
                borderColor: "var(--primaryYellow)",
                alignSelf: "center",
                fontSize: "1rem",
              }}
              onClick={() => toogleLanguage()}
            >
              {user.isEnglish ? "Eng" : "Ger"}
            </Button>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
