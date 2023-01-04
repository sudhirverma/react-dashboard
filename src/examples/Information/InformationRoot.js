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
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)({
  "& .MuiDrawer-paper": {
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms, cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#fff",
    boxShadow: `0px 11px 15px -7px rgb(0 0 0 / 20%),
      0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)`,
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    overflow: "visible",
    maxHeight: "640px",
    width: "90%",
    maxWidth: "940px",
    borderRadius: "8px",
    // margin: "50px",
    position: "absolute",
    top: "20px",
    left: 0,
    bottom: "20px",
    right: 0,
    margin: "auto",
  },
});
