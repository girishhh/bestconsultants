import { Grid, Stack, Typography } from "@mui/material";

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

  return (
    <Grid container direction="column" sx={{ px: 5 }}>
      <Grid item flexGrow={miscellaneousStyles?.appInfoFlexGrow}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <img
            src="../assets/logo.png"
            width="240"
            height="inherit"
            alt="Logo"
            loading="lazy"
          />
        </Stack>
        <Stack direction="row" container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h3">
              It's a Plattform to Build Technical Confidence in Civil
              Engineering Aspirants!
            </Typography>
          </Grid>
          <Grid item xs={4}>
            Right Part
          </Grid>
        </Stack>
      </Grid>

      <Grid
        item
        flexGrow={miscellaneousStyles?.secInfoFlexGrow}
        marginTop="32px"
      >
        <Stack></Stack>
      </Grid>
    </Grid>
  );
}
