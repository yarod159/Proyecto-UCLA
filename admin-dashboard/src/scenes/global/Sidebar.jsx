import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

// Import icons and other components as before

const Sidebar = () => {
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
 const [isCollapsed, setIsCollapsed] = useState(false);
 const [selected, setSelected] = useState("Dashboard");

 return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        {/* Your Menu and MenuItem components here */}
      </ProSidebar>
    </Box>
 );
};

export default Sidebar;