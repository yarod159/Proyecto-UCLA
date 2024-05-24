import React, { useState } from "react";
import SidebarMui from "../../components/sideBar/SidebarMui";
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import Faq from "./Faq";
import MetodosPago from "./MetodosPago";
import ComponenteSistema from "./componenteSistema";
import Ajustes from "./Ajustes";

const MainAjustes = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <Box className="container">
        <SidebarMui />
        <Box
          className="productList"
          sx={{ flexGrow: 1, overflowX: "auto", padding: 2, marginTop: 8 }}
        >
          <Box>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginBottom: "40px",
              }}
            >
              <Tabs
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                aria-label="basic tabs example"
                TabIndicatorProps={{ style: { backgroundColor: "#18a0a6" } }}
              >
                <Tab
                  label="Metodos de Pago"
                  sx={{ color: value === 0 ? "#88ce28" : "inherit" }}
                />
                <Tab
                  label="Preguntas Frecuentes"
                  sx={{ color: value === 1 ? "#88ce28" : "inherit" }}
                />
                <Tab
                  label="Componentes del Sistema"
                  sx={{ color: value === 2 ? "#88ce28" : "inherit" }}
                />
                 <Tab
                  label="Instalacion de la Web"
                  sx={{ color: value === 3 ? "#88ce28" : "inherit" }}
                />
              </Tabs>
            </Box>
            {value === 0 && <MetodosPago />}
            {value === 1 && <Faq />}
            {value === 2 && <ComponenteSistema />}
            {value === 3 && <Ajustes />}

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainAjustes;
