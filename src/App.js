import './App.css';
import CompanyTable from './CompanyList';
import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    padding: '8px',
    height: '100vh',
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    height: '100%',
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
  const [theme, setTheme] = useState(true);
  const classes = useStyles();
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);
  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper>
          <div className={classes.root}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
            <CompanyTable/>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};
