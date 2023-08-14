import {
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./HomePage.css";

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
      {(isLaptop || isTablet) && (
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
                >
                  It's a Plattform to Build Technical Confidence in Civil
                  Engineering Aspirants!
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Carousel>
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
              <List sx={{ width: "inherit" }}>
                <ListItem>
                  <Typography variant="h5">Course Highlights</Typography>
                </ListItem>
                <ListItem>
                  <p>Internship Program:</p>Training the Civil Enginners to meet
                  Industry Standard Requirements
                </ListItem>
                <ListItem>
                  Planning by using <p>AutoCAD</p> & Drafting of Structural
                  Elemenets
                </ListItem>
                <ListItem>
                  Basics of Structural Analysis, Manual Design, Designing with{" "}
                  <p>Stad Pro/Etabs Softwares</p>
                </ListItem>
                <ListItem>Detailed Estimation</ListItem>
                <ListItem>Barbending Schedule</ListItem>
                <ListItem sx={{ width: "inherit" }}>
                  <Stack
                    direction="row"
                    container
                    spacing={2}
                    paddingTop="2rem"
                    width="inherit"
                  >
                    <Grid item xs={5}>
                      <List>
                        <ListItem>
                          <Typography variant="h5">Amaresh Ramatnal</Typography>
                        </ListItem>
                        <ListItem>Managing Director</ListItem>
                        <ListItem>M.Tech, CAD Structures</ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={3}>
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
                    <Grid item xs={4} display="flex" justifyContent="end">
                      <List>
                        <ListItem>
                          <Typography variant="h5">Register Now</Typography>
                        </ListItem>
                        <ListItem>+918147925885</ListItem>
                        <ListItem>+918147925885</ListItem>
                        <ListItem>bestconsultantprojects@gmail.com</ListItem>
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
              sx={{ backgroundColor: "#b26b01" }}
            >
              <Typography variant="h5">
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
      {isMobile && (
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
                  It's a Plattform to Build Technical Confidence in Civil
                  Engineering Aspirants!
                </Typography>
              </Grid>
            </Stack>

            <Stack
              direction="row"
              container
              spacing={2}
              padding="1rem"
              paddingTop="2rem"
            >
              <Grid item xs={12}>
                <Carousel>
                  <img
                    src="../assets/students.png"
                    width="auto"
                    height="200"
                    alt="Logo"
                    loading="lazy"
                  />
                  <img
                    src="../assets/students2.jpg"
                    width="auto"
                    height="200"
                    alt="Logo"
                    loading="lazy"
                  />
                  <img
                    src="../assets/students3.jpg"
                    width="auto"
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
                  <Typography variant="h5">Course Highlights</Typography>
                </ListItem>
                <ListItem className="font-16">
                  <span>
                    <span>Internship Program:</span> Training the Civil
                    Enginners to meet Industry Standard Requirements
                  </span>
                </ListItem>
                <ListItem className="font-16">
                  <span>
                    Planning by using <span>AutoCAD</span> & Drafting of
                    Structural Elemenets
                  </span>
                </ListItem>
                <ListItem className="font-16">
                  <span>
                    Basics of Structural Analysis, Manual Design, Designing with{" "}
                    <span>Stad Pro/Etabs Softwares</span>
                  </span>
                </ListItem>
                <ListItem className="font-16">
                  <span>Detailed Estimation</span>
                </ListItem>
                <ListItem className="font-16">
                  <span>Barbending Schedule</span>
                </ListItem>
                <ListItem className="font-16">
                  <Grid container>
                    <Grid item xs={4}>
                      <List>
                        <ListItem sx={{ padding: "0" }}>
                          <Typography>
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
                      <List sx={{paddingTop: "0.75rem"}}>
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
                          Register Now
                        </ListItem>
                        <ListItem sx={{ paddingTop: "0", paddingBottom: "0" }}>
                          +918147925885
                        </ListItem>
                        <ListItem sx={{ paddingTop: "0", paddingBottom: "0" }}>
                          +918147925885
                        </ListItem>
                        <ListItem
                          sx={{
                            paddingTop: "0.75rem",
                            paddingBottom: "0",
                            overflowWrap: "anywhere",
                          }}
                        >
                          <span>bestconsultantprojects@gmail.com</span>
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
              <Typography>
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
