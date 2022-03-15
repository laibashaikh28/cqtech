import * as React from "react";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EditIcon from "@mui/icons-material/Edit";
import ListPage from "../../List/pages/List";
import EditPage from "../../Edit/pages/Edit";

const Sidebar = ({ onClickEdit, onClickList, showList, showEdit }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          style={{
            backgroundColor: "#1a1212",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Library
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          backgroundColor: "rgba(2,0,36,1)",

          [`& .MuiDrawer-paper`]: {
            width: 240,
            backgroundColor: "#1a1212",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem
              button
              sx={
                showList
                  ? {
                      color: "#1a1212",
                      borderRadius: "30px",
                      bgcolor: "white",
                      "&:hover": {
                        borderRadius: "30px",
                        bgcolor: "white",
                      },
                    }
                  : {
                      borderRadius: "30px",
                      color: "#fff",
                    }
              }
              onClick={onClickList}
              key="List"
            >
              <ListItemIcon>
                <ListAltIcon sx={{ color: showList ? "#1a1212" : "white" }} />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem
              button
              onClick={onClickEdit}
              sx={
                showEdit
                  ? {
                      color: "#1a1212",
                      borderRadius: "30px",
                      bgcolor: "white",
                      "&:hover": {
                        borderRadius: "30px",
                        bgcolor: "white",
                      },
                    }
                  : { color: "#fff", borderRadius: "30px" }
              }
              key="Edit"
            >
              <ListItemIcon>
                <EditIcon sx={{ color: showEdit ? "#1a1212" : "white" }} />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {showList ? <ListPage /> : <EditPage />}
      </Box>
    </Box>
  );
};

export default Sidebar;
