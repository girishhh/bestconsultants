import { Outlet, useNavigation } from "react-router-dom";
import {
  Box,
  Container,
  Toolbar,
  LinearProgress,
  useMediaQuery,
} from "@mui/material";

import Header from "./Header";
import Toast from "./Toast";
import SideNav from "./SideNav";

function RootLayout() {
  const navigation = useNavigation();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Toast />
      {/* <Header />       */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          // overflowX: "hidden"
        }}
      >
        {navigation.state === "loading" && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: "#ffffff",
            overflow: "auto",
            p: `${isMobile ? "0" : "3"}`,
            // overflowX: "hidden"
          }}
          maxWidth="false"
          disableGutters
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default RootLayout;
