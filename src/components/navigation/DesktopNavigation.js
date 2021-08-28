import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./navigationStyle";

export const DesktopNavigation = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Container
            maxWidth="lg"
            style={{
              borderBottom: "0.25px solid #D4D4D8",
              padding: "0.5rem 0rem",
            }}
          >
            <Grid container direction="row">
              <Grid item>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", color: "#333" }}
                >
                  nullBrains<span style={{ color: "#8B5CF6" }}>.</span>
                </Typography>
              </Grid>
              <Grid item className={classes.navOptions}>
                <div className={classes.navOptionsDiv}>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Typography variant="body1" className={classes.option}>
                      Home
                    </Typography>
                    <Typography variant="body1" className={classes.option}>
                      Features
                    </Typography>
                    <Typography variant="body1" className={classes.option}>
                      Blog
                    </Typography>
                    <Typography variant="body1" className={classes.option}>
                      Contact
                    </Typography>
                    <SearchIcon className={classes.option} />
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div style={{ display: "inline-block" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body1"
                      className={classes.option}
                      style={{ marginTop: "0.25rem" }}
                    >
                      Sign In
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        backgroundColor: "#7C3AED",
                        borderRadius: "2.5rem",
                        marginLeft: "0.5rem",
                        color: "white",
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
