import React from "react";

import {
  Avatar,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TableCell,
  TablePagination,
  Paper,
  Checkbox,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
// import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";

import { traitReponse, singleTraitResponse } from "./data";

const drawerWidth = 240;
const themeBuffer = localStorage.getItem("preferred-theme");

const lightTheme = {
  palette: {
    type: "light",
    primary: {
      main: "#FFFFFF",
      text: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
};

const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
      text: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
};

let theme = createMuiTheme(themeBuffer === "dark" ? darkTheme : lightTheme);

const useStylesForSwitch = makeStyles({
  root: {
    width: "50px",
    height: "24px",
    padding: "0px",
  },
  switchBase: {
    color: "#818181",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#d3dbd6",
      },
    },
  },
  thumb: {
    color: "white",
    width: "20px",
    height: "20px",
    margin: "1px",
  },
  track: {
    borderRadius: "20px",
    backgroundColor: "#818181",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px",
    },
    "&:after": {
      content: "'🌞'",
      left: "8px",
    },
    "&:before": {
      content: "'🌜'",
      right: "7px",
    },
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(26px) !important",
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  tabs: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: "100px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    marginLeft: 0,
    color: "grey",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  hiddenXS: {
    display: "none ! important",
  },
}));

// const baseURL =
//  "https://gist.githubusercontent.com/sharathkumaranbu/f3fa0b808107a4893b3173bb18857208/raw/836e33c6b379b1d227301a8e43ec50571f8b3198/Get%2520All%2520Traits.json";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  index: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainPage() {
  const classes = useStyles();
  const switchclasses = useStylesForSwitch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [state, setState] = React.useState({
    id: true,
    desc: true,
    dtype: true,
    pdata: true,
    name: true,
  });

  const valueBuffer = themeBuffer !== "dark";
  const [themeSelect, setChecked] = React.useState(valueBuffer);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = React.useState(0);
  const [valueDialogTab, setValueDialogTab] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const rows = traitReponse.data.items;
  const openColumnFilter = Boolean(anchorEl);
  const openFilter = Boolean(anchorE2);
  const marketingItems = singleTraitResponse.data.marketingPrograms;
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleDialogClickOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickFilter = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseFilter = () => {
    setAnchorE2(null);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.traitId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleSelectClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.info(event.target.value);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSwitchChangeThemeSelect = () => {
    // eslint-disable-next-line no-unused-expressions
    setChecked((prev) => !prev);
    if (themeSelect === true) {
      theme = createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#000000",
            text: "#FFFFFF",
          },
          secondary: {
            main: "#FFFFFF",
          },
        },
      });
      localStorage.setItem("preferred-theme", "dark");
    } else {
      theme = createMuiTheme({
        palette: {
          type: "light",
          primary: {
            main: "#FFFFFF",
            text: "#000000",
          },
          secondary: {
            main: "#FFFFFF",
          },
        },
      });
      localStorage.setItem("preferred-theme", "light");
    }
  };

  const handleSwitchChange = (event) => {
    // eslint-disable-next-line no-unused-expressions
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // eslint-disable-next-line no-unused-vars
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDialogTabChange = (event, newValue) => {
    setValueDialogTab(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const filters = [
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>Filter by</Typography>
      <Button id="clearfilter" placeholder="X" onClick={handleCloseFilter}>
        X
      </Button>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox />
      <Typography>Trait ID</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox />
      <Typography>Trait Name</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox />
      <Typography>Description</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox />
      <Typography>Data Type</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox />
      <Typography>Personal Data</Typography>
    </div>,
  ];

  const options = [
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>Manage Columns</Typography>
      <Button onClick={handleClose}>X</Button>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Switch
        name="id"
        checked={state.id}
        onChange={handleSwitchChange}
        color="default"
      />
      <Typography>Trait ID</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Switch
        name="name"
        checked={state.name}
        onChange={handleSwitchChange}
        color="default"
      />
      <Typography>Trait Name</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Switch
        name="desc"
        checked={state.desc}
        onChange={handleSwitchChange}
        color="default"
      />
      <Typography>Description</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Switch
        name="dtype"
        checked={state.dtype}
        onChange={handleSwitchChange}
        color="default"
      />
      <Typography>Data Type</Typography>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Switch
        name="pdata"
        checked={state.pdata}
        onChange={handleSwitchChange}
        color="default"
      />
      <Typography>Personal Data</Typography>
    </div>,
  ];

  const columns = [
    {
      field: "id",
      headerName: "Trait ID",
      width: 150,
      hide: false,
      isfield: true,
    },
    {
      field: "name",
      headerName: "Trait Name",
      width: 150,
      isfield: true,
      editable: true,
      hide: false,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 300,
      isfield: true,
      editable: true,
      hide: true,
    },
    {
      field: "dtype",
      headerName: "Data Type",
      width: 150,
      isfield: true,
      editable: true,
      hide: false,
    },
    {
      field: "pdata",
      headerName: "Personal Data",
      width: 150,
      isfield: true,
      editable: true,
      hide: false,
    },
    {
      field: "dummy",
      isfield: true,
      headerName: (
        <strong>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <TuneIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={openColumnFilter}
            PaperProps={{
              style: {
                height: "auto",
                width: "auto",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option}>{option}</MenuItem>
            ))}
          </Menu>
        </strong>
      ),
      width: 100,
      editable: true,
      hide: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="grey"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <div
              className={classes.title}
              style={{
                display: "flex",
              }}
            >
              <Typography
                style={{
                  paddingLeft: "10px",
                }}
                variant="h6"
              >
                Consumer 360 °
              </Typography>
              <Typography
                style={{
                  color: "#A9DA2D",
                  paddingLeft: "10px",
                }}
                variant="h5"
              >
                CRS
              </Typography>
            </div>
            <div
              style={{
                paddingRight: "10px",
              }}
            >
              <Switch
                classes={{
                  root: switchclasses.root,
                  switchBase: switchclasses.switchBase,
                  thumb: switchclasses.thumb,
                  track: switchclasses.track,
                  checked: switchclasses.checked,
                }}
                checked={themeSelect}
                onChange={handleSwitchChangeThemeSelect}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
            <Avatar>CJ</Avatar>
            <Typography
              style={{
                paddingLeft: "10px",
              }}
              variant="h6"
            >
              Christon James
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div />
          <AppBar position="static" className={classes.tabs}>
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              paddingTop=""
            >
              <Tab label="TRAITS" {...a11yProps(0)} />
              <Tab label="TRAITS USE CASE" {...a11yProps(1)} />
              <Tab
                label="TRAITS RESPONSE"
                {...a11yProps(2)}
                sx={{ flexGrow: "1" }}
              />
              <Tab disabled />
              <Tab disabled />
              {selected.length > 0 ? (
                <Button
                  id="create"
                  variant="contained"
                  color="primary"
                  placeholder="REUSE"
                >
                  REUSE
                </Button>
              ) : (
                <Button
                  id="create"
                  variant="contained"
                  color="primary"
                  placeholder="CREATE TRAIT"
                >
                  CREATE TRAIT
                </Button>
              )}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  id="search"
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onClick={handleClickFilter}
                  inputProps={{ "aria-label": "search" }}
                />
                <Menu
                  id="filter-menu"
                  anchorE1={anchorE2}
                  keepMounted
                  open={openFilter}
                  PaperProps={{
                    style: {
                      height: "auto",
                      width: "auto",
                    },
                  }}
                >
                  {filters.map((filter) => (
                    <MenuItem key={filter}>{filter}</MenuItem>
                  ))}
                </Menu>
              </div>
              <Button
                id="clearfilter"
                placeholder="X"
                onClick={handleCloseFilter}
              >
                X
              </Button>
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div
              style={{ height: "100%", width: "100%" }}
              onChange={handleSwitchChange}
            >
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          indeterminate={
                            selected.length > 0 && selected.length < rows.length
                          }
                          checked={
                            rows.length > 0 && selected.length === rows.length
                          }
                          onChange={handleSelectAllClick}
                          inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </TableCell>
                      {columns.map((column) =>
                        (column.field === "id" && state.id) ||
                        (column.field === "name" && state.name) ||
                        (column.field === "desc" && state.desc) ||
                        (column.field === "dtype" && state.dtype) ||
                        (column.field === "pdata" && state.pdata) ||
                        column.field === "dummy" ? (
                          <TableCell>{column.headerName}</TableCell>
                        ) : (
                          <TableCell className={classes.hiddenXS}>
                            {column.headerName}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.traitId);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.traitId}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={isItemSelected}
                                onClick={(event) =>
                                  handleSelectClick(event, row.traitId)
                                }
                                inputProps={{ "aria-labelledby": labelId }}
                              />
                            </TableCell>
                            {state.id ? (
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                <Button
                                  style={{ textDecoration: "underline" }}
                                  onClick={handleDialogClickOpen}
                                >
                                  {row.traitId}
                                </Button>
                              </TableCell>
                            ) : (
                              <TableCell
                                className={classes.hiddenXS}
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.traitId}
                              </TableCell>
                            )}
                            {state.name ? (
                              <TableCell>{row.traitName}</TableCell>
                            ) : (
                              <TableCell className={classes.hiddenXS}>
                                {row.traitName}
                              </TableCell>
                            )}
                            {state.desc ? (
                              <TableCell>{row.description}</TableCell>
                            ) : (
                              <TableCell className={classes.hiddenXS}>
                                {row.description}
                              </TableCell>
                            )}
                            {state.dtype ? (
                              <TableCell>{row.dataType}</TableCell>
                            ) : (
                              <TableCell className={classes.hiddenXS}>
                                {row.dataType}
                              </TableCell>
                            )}
                            {state.pdata ? (
                              <TableCell>
                                {row.personalData.toString()}
                              </TableCell>
                            ) : (
                              <TableCell className={classes.hiddenXS}>
                                {row.personalData}
                              </TableCell>
                            )}
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
              <Dialog
                open={openDialog}
                maxWidth="md"
                onClose={handleDialogClose}
                style={{ height: "100%", width: "100%" }}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  <div
                    className={classes.title}
                    style={{
                      display: "flex",
                    }}
                  >
                    <Typography variant="h6">Trait ID - 1</Typography>
                    <Button onClick={handleDialogClose}>X</Button>
                  </div>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <Paper square>
                      <AppBar position="static">
                        <Tabs
                          className={classes.tabs}
                          value={valueDialogTab}
                          onChange={handleDialogTabChange}
                          aria-label="simple dialog example"
                          paddingTop=""
                        >
                          <Tab label="TRAIT DETAILS" {...a11yProps(0)} />
                          <Tab label="MARKING PROGRAMS" {...a11yProps(1)} />
                          <Tab
                            label="ECO SYSTEMS"
                            sx={{ flexGrow: "1" }}
                            {...a11yProps(2)}
                          />
                        </Tabs>
                      </AppBar>
                      <TabPanel value={valueDialogTab} index={0}>
                        <TableContainer>
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell>
                                  <Typography>Trait Id</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.traitId}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Trait Name</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.traitName}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Description</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.description}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Personal Data</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.personalData.toString()}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Data Type</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.dataType}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Data Class</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.dataClass}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Trait Type</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.traitType}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Survivor Ship Level</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.survivorShipLevel}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>
                                    Multi Answer Response Indicator
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.multiAnswerResponseIndicator.toString()}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <Typography>Survivor Ship Rule</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {singleTraitResponse.data.survivorShipRule}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </TabPanel>
                      <TabPanel value={valueDialogTab} index={1}>
                        {marketingItems.map((item) => (
                          <div>
                            <Typography variant="h5">
                              {item.description}
                            </Typography>
                            <Typography>ECOSYSTEMS</Typography>
                            <Typography>{item.ecosystems}</Typography>
                            <Divider />
                          </div>
                        ))}
                      </TabPanel>
                      <TabPanel value={valueDialogTab} index={2} />
                    </Paper>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            TODO
          </TabPanel>
          <TabPanel value={value} index={2}>
            TODO
          </TabPanel>
        </main>
      </div>
    </ThemeProvider>
  );
}
