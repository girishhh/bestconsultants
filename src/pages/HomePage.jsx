import {
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./HomePage.css";
import { white } from "ansi-colors";

const homePageStyleProps = {
  homePage: {
    homeCard: {
      laptopAndAbove: {
        sx: {
          display: "flex",
          maxWidth: "27rem",
          minWidth: "27rem",
          minHeight: "12rem",
        },
      },
    },
    miscellaneous: {
      laptopAndAbove: {
        cardWrap: {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
        },
        typoh5h2: {
          variant: "h5",
          fontSize: "18px",
          width: "150px",
          marginLeft: "0.75rem",
          textAlign: "center",
        },
        typoStats: {
          fontSize: "32px",
          color: "#00749E",
          fontWeight: "600",
        },
        spaceCenter: {
          spacing: 2,
          justify: "center",
        },
        controlInfoTitle: {
          variant: "h4",
          fontSize: "32px",
          marginBottom: "24px",
        },
        appInfoTitle: {
          variant: "h4",
          fontSize: "32px",
          marginBottom: "24px",
        },
        appInfoFlexGrow: {
          flexGrow: 0.5,
        },
        secInfoFlexGrow: {
          flexGrow: 1,
        },
      },
    },
  },
};

export default function HomePage() {
  const miscellaneousStyles =
    homePageStyleProps.homePage.miscellaneous.laptopAndAbove;
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  console.log("ISMOBILEEEEE", isMobile);

  return (
    <>
      {isLaptop && (
        <Grid
          container
          direction="column"
          sx={{ px: 5, overflow: "auto" }}
          padding={isMobile ? "0px !important" : ""}
        >
          <Grid item flexGrow={miscellaneousStyles?.appInfoFlexGrow}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <img
                className="img"
                src="../assets/logo.png"
                width={isMobile ? "240" : "340"}
                height="inherit"
                alt="Logo"
                loading="lazy"
              />
            </Stack>
            <Stack direction="row" container spacing={2} paddingTop="2rem">
              <Grid item xs={4}>
                <Typography
                  variant="h3"
                  color="#621e1a"
                  sx={{ fontFamily: "Times New Roman, Times, serif" }}
                  fontWeight="bold"
                  className="font-2-5"
                >
                  <Carousel height="18rem" NextIcon PrevIcon>
                    <span className="max-height">
                      It's a Plattform to Build Technical Confidence in Civil
                      Engineering Aspirants!
                    </span>
                    <span>
                      More Practical Industry Exposure through Site Services
                    </span>
                    <span>
                      Classes for Diploma in Civil, B.E, M.Tech Students
                    </span>
                  </Carousel>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Carousel NextIcon PrevIcon className="corosel">
                  <img
                    src="../assets/students.png"
                    width="850"
                    height="300"
                    alt="Logo"
                    loading="lazy"
                  />
                  <img
                    src="../assets/students2.jpg"
                    width="850"
                    height="300"
                    alt="Logo"
                    loading="lazy"
                  />
                  <img
                    src="../assets/students3.jpg"
                    width="850"
                    height="300"
                    alt="Logo"
                    loading="lazy"
                  />
                </Carousel>
              </Grid>
            </Stack>
            <Stack
              direction="row"
              container
              spacing={2}
              paddingTop="2rem"
              className="course-details"
              sx={{
                "border-top-left-radius": "1rem",
                "border-top-right-radius": "1rem",
              }}
            >
              <List sx={{ width: "inherit" }} className="font-20">
                <ListItem sx={{ paddingBottom: "2rem" }}>
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <Typography variant="h5" className="course-highlites">
                        Course Highlights
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>
                      <span className="text-highlite">Internship Program:</span>
                      <span className="span-pl">
                        Training the Civil Enginners to meet Industry Standard
                        Requirements
                      </span>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>
                      Planning by using{" "}
                      <span className="text-highlite">AutoCAD</span> & Drafting
                      of Structural Elemenets
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>
                      Basics of Structural Analysis, Manual Design, Designing
                      with{" "}
                      <span className="text-highlite">
                        Stad Pro/Etabs Softwares
                      </span>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>Detailed Estimation</Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>Barbending Schedule</Grid>
                  </Grid>
                </ListItem>
                <ListItem sx={{ width: "inherit", paddingRight: "0" }}>
                  <Stack
                    direction="row"
                    container
                    spacing={2}
                    paddingTop="2rem"
                    width="inherit"
                  >
                    <Grid item xs={4}>
                      <List sx={{ paddingTop: "1.5rem" }}>
                        <ListItem>
                          <Typography variant="h4" className="text-highlite">
                            Amaresh Ramatnal
                          </Typography>
                        </ListItem>
                        <ListItem sx={{ paddingBottom: "0" }}>
                          Managing Director
                        </ListItem>
                        <ListItem sx={{ paddingTop: "0" }}>
                          M.Tech, CAD Structures
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center">
                      <List>
                        <ListItem>
                          <img
                            className="img"
                            src="../assets/logo.png"
                            width="180"
                            height="inherit"
                            alt="Logo"
                            loading="lazy"
                          />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={5} display="flex" justifyContent="end">
                      <List>
                        <ListItem>
                          <Typography variant="h5" className="register">
                            Register Now
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <Grid container flexWrap="inherit">
                            <Grid
                              sx={1}
                              display="flex"
                              paddingRight="0.5rem"
                              alignSelf="center"
                            >
                              <CallIcon />
                            </Grid>
                            <Grid sx={11}>
                              <div>+918147925885</div>
                              <div>+918147925885</div>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem>
                          <Grid container flexWrap="inherit">
                            <Grid
                              sx={1}
                              display="flex"
                              paddingRight="0.5rem"
                              alignSelf="center"
                            >
                              <EmailIcon />
                            </Grid>
                            <Grid sx={11}>
                              bestconsultantprojects@gmail.com
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                    </Grid>
                  </Stack>
                </ListItem>
              </List>
            </Stack>
            <Stack
              direction="row"
              container
              spacing={2}
              padding="1rem"
              justifyContent="center"
              sx={{
                backgroundColor: "#b26b01",
                color: "white",
                "border-bottom-left-radius": "1rem",
                "border-bottom-right-radius": "1rem",
              }}
            >
              <Typography display="flex" variant="h5">
                <PlaceIcon sx={{ alignSelf: "center" }} />
                #2813, S.M. Complex, Near Mahamani Circle, 3rd Stage,
                Dattagalli, Mysuru-570023{" "}
              </Typography>
            </Stack>
            {/* <img
        className=""
        src="../assets/bestweb.jpg"
        width="480"
        height="inherit"
        alt="Logo"
        loading="lazy"
      /> */}
          </Grid>
        </Grid>
      )}
      {(isMobile || isTablet) && (
        <Grid container direction="column" sx={{ overflow: "auto" }}>
          <Grid item>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <img
                className="img"
                src="../assets/logo.png"
                width={isMobile ? "240" : "340"}
                height="inherit"
                alt="Logo"
                loading="lazy"
              />
            </Stack>

            <Stack
              direction="row"
              container
              spacing={2}
              padding="1rem"
              paddingTop="2rem"
            >
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  color="#621e1a"
                  sx={{
                    fontFamily: "Times New Roman, Times, serif",
                    textAlign: "center",
                  }}
                  fontWeight="bold"
                  fontSize="32px"
                >
                  <Carousel NextIcon PrevIcon>
                    <span>
                      It's a Plattform to Build Technical Confidence in Civil
                      Engineering Aspirants!
                    </span>
                    <span>
                      More Practical Industry Exposure through Site Services
                    </span>
                    <span>
                      Classes for Diploma in Civil, B.E, M.Tech Students
                    </span>
                  </Carousel>
                </Typography>
              </Grid>
            </Stack>

            <Stack
              direction="row"
              container
              spacing={2}
              padding="1rem"
              paddingTop="2rem"
              textAlign="center"
            >
              <Grid item xs={12}>
                <Carousel className="corosel" NextIcon PrevIcon>
                  <img
                    src="../assets/students.png"
                    width="100%"
                    height="200"
                    alt="Logo"
                    loading="lazy"
                  />
                  <img
                    src="../assets/students2.jpg"
                    width="100%"
                    height="200"
                    alt="Logo"
                    loading="lazy"
                  />
                  <img
                    src="../assets/students3.jpg"
                    width="100%"
                    height="200"
                    alt="Logo"
                    loading="lazy"
                  />
                </Carousel>
              </Grid>
            </Stack>

            <Stack
              direction="row"
              container
              spacing={2}
              paddingTop="2rem"
              className="course-details font-32"
              sx={{
                "border-top-left-radius": `${isMobile ? "1.25rem" : "1rem"}`,
                "border-top-right-radius": `${isMobile ? "1.25rem" : "1rem"}`,
              }}
            >
              <List sx={{ width: "inherit" }} className="course-details-list">
                <ListItem>
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <Typography className="course-highlites">
                        Course Highlights
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem className="font-16">
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>
                      <span className="text-highlite">Internship Program:</span>
                      <span className="span-pl">
                        Training the Civil Enginners to meet Industry Standard
                        Requirements
                      </span>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem className="font-16">
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>
                      Planning by using{" "}
                      <span className="text-highlite">AutoCAD</span> & Drafting
                      of Structural Elemenets
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem className="font-16">
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>
                      Basics of Structural Analysis, Manual Design, Designing
                      with{" "}
                      <span className="text-highlite">
                        Stad Pro/Etabs Softwares
                      </span>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem className="font-16">
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>Detailed Estimation</Grid>
                  </Grid>
                </ListItem>
                <ListItem className="font-16">
                  <Grid container flexWrap="inherit">
                    <Grid sx={1} display="flex" paddingRight="0.5rem">
                      <div class="circle">
                        <div class="icon">&#10004;</div>
                      </div>
                    </Grid>
                    <Grid sx={11}>Barbending Schedule</Grid>
                  </Grid>
                </ListItem>
                <ListItem className="font-16">
                  <Grid container>
                    <Grid item xs={4}>
                      <List>
                        <ListItem sx={{ padding: "0" }}>
                          <Typography className="text-highlite font-20">
                            Amaresh Ramatnal
                          </Typography>
                        </ListItem>
                        <ListItem sx={{ padding: "0" }} className="font-12">
                          Managing Director
                        </ListItem>
                        <ListItem sx={{ padding: "0" }} className="font-12">
                          M.Tech, CAD Structures
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={3}>
                      {/* <List sx={{ paddingLeft: "0.5rem" }}>
                        <ListItem
                          sx={{
                            paddingLeft: "0",
                            paddingRight: "0",
                            paddingTop: "4px",
                          }}
                        >
                          <img
                            className="img"
                            src="../assets/logo.png"
                            width="70"
                            height="70"
                            alt="Logo"
                            loading="lazy"
                          />
                        </ListItem>
                      </List> */}
                      <List sx={{ paddingTop: "0.75rem" }}>
                        <img
                          className="img"
                          src="../assets/logo.png"
                          width="90"
                          height="105rem"
                          alt="Logo"
                          loading="lazy"
                        />
                      </List>
                    </Grid>
                    <Grid item xs={5}>
                      <List className="font-12">
                        <ListItem
                          sx={{
                            paddingTop: "0",
                            paddingBottom: "0",
                          }}
                          className="font-16"
                        >
                          <Typography className="register" textAlign="center">
                            Register Now
                          </Typography>
                        </ListItem>
                        <ListItem sx={{ paddingTop: "0", paddingBottom: "0" }}>
                          <Grid container flexWrap="inherit">
                            <Grid
                              sx={1}
                              display="flex"
                              paddingRight="0.5rem"
                              alignSelf="center"
                            >
                              <CallIcon fontSize="small" />
                            </Grid>
                            <Grid sx={11}>
                              <div>+918147925885</div>
                              <div>+918147925885</div>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem
                          sx={{
                            paddingTop: "0.25rem",
                            paddingBottom: "0",
                            overflowWrap: "anywhere",
                          }}
                        >
                          <Grid container flexWrap="inherit">
                            <Grid
                              sx={1}
                              display="flex"
                              paddingRight="0.5rem"
                              alignSelf="center"
                            >
                              <EmailIcon fontSize="small" />
                            </Grid>
                            <Grid sx={11}>
                              bestconsultantprojects@gmail.com
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Stack>
            <Stack
              direction="row"
              container
              spacing={2}
              padding="1rem"
              justifyContent="center"
              className="font-16"
              sx={{ backgroundColor: "#b26b01" }}
              color="white"
            >
              <Typography display="flex">
                <PlaceIcon sx={{ alignSelf: "center" }} />
                #2813, S.M. Complex, Near Mahamani Circle, 3rd Stage,
                Dattagalli, Mysuru-570023{" "}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      )}
    </>
  );
}
