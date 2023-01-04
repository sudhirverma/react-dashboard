/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setDetailInformation } from "../../context";

import OSSPMaster from "../../OSSPMaster.json";

function lable(title) {
  return (
    <MDBox
      mx={2}
      mt={-3}
      py={3}
      px={2}
      variant="gradient"
      bgColor="info"
      borderRadius="lg"
      coloredShadow="info"
      style={{ marginTop: `1%` }}
    >
      <MDTypography variant="h6" color="white">
        {title}
      </MDTypography>
    </MDBox>
  );
}

function cardDashboard(name) {
  const [controller, dispatch] = useMaterialUIController();
  const { detailInformation } = controller;
  // Change the detailInformation state
  const handleConfiguratorOpen = () => setDetailInformation(dispatch, !detailInformation);

  return (
    <MDBox py={3} style={{ marginLeft: `2%`, marginRight: `2%` }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} lg={1.5}>
          <MDBox mb={1.5} sx={{ cursor: "pointer" }} onClick={handleConfiguratorOpen}>
            <ComplexStatisticsCard title={name} />
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

function Dashboard() {
  const content = [];
  const resourceMap = {};
  for (let i = 0; i < OSSPMaster.length; i += 1) {
    if (!resourceMap[OSSPMaster[i].bes_technology_stack]) {
      resourceMap[OSSPMaster[i].bes_technology_stack] = [cardDashboard(OSSPMaster[i].name)];
    } else {
      resourceMap[OSSPMaster[i].bes_technology_stack].push(cardDashboard(OSSPMaster[i].name));
    }
  }
  const key = Object.keys(resourceMap);
  for (let i = 0; i < key.length; i += 1) {
    content.push(lable(key[i]), ...resourceMap[key[i]]);
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {content}
    </DashboardLayout>
  );
}

export default Dashboard;
