import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: "20px 40px",
        borderTop: "1px solid #ddd",
        color: "white",
      }}
    >
      <Grid container spacing={3}>
        {/* Column 1 */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Link href="#" underline="hover">
            About Us
          </Link>
          <Link href="#" underline="hover">
            Careers
          </Link>
          <Link href="#" underline="hover">
            Press
          </Link>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>
            Resources
          </Typography>
          <Link href="#" underline="hover">
            Blog
          </Link>
          <Link href="#" underline="hover">
            Documentation
          </Link>
          <Link href="#" underline="hover">
            API
          </Link>
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Link href="#" underline="hover">
            Help Center
          </Link>
          <Link href="#" underline="hover">
            Community
          </Link>
          <Link href="#" underline="hover">
            Contact Us
          </Link>
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Link href="#" underline="hover">
            Privacy Policy
          </Link>
          <Link href="#" underline="hover">
            Terms of Service
          </Link>
          <Link href="#" underline="hover">
            Cookie Policy
          </Link>
        </Grid>

        {/* Column 5 */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Link href="#" underline="hover">
            Facebook
          </Link>
          <Link href="#" underline="hover">
            Twitter
          </Link>
          <Link href="#" underline="hover">
            LinkedIn
          </Link>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: 3, color: "#777" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
