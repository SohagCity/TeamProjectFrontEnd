import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  }
}));

export default function NavBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false
  });

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ open });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component="a" href="/recordSale" key={"recordSale"}>
          <ListItemText primary={"Record Sale"} />
        </ListItem>

        <Divider />
        <ListItem
          button
          component="a"
          href="/travelAgents"
          key={"travelAgents"}
        >
          <ListItemText primary={"Travel Agents"} />
        </ListItem>

        <Divider />
        <ListItem button component="a" href="/blanks" key={"blanks"}>
          <ListItemText primary={"Blanks"} />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="/currencies" key={"currencies"}>
          <ListItemText primary={"Currencies"} />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="/commissions" key={"commissions"}>
          <ListItemText primary={"Commissions"} />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="/tickets" key={"tickets"}>
          <ListItemText primary={"Tickets"} />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="/customers" key={"customers"}>
          <ListItemText primary={"Customers"} />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="/users" key={"Users"}>
          <ListItemText primary={"Users"} />
        </ListItem>
        <Divider />
        <ListItem
          button
          component="a"
          href="/backupSettings"
          key={"backupSettings"}
        >
          <ListItemText primary={"Backup Settings"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            AirVia
          </Typography>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button color="inherit" href="/">
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
