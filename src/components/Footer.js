import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import logo from '../assets/icons/team.png';

const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 64px;
  margin-top: auto;
  padding: 0 32px;
  border-top: 1px solid lightgray;
  align-items: center;
  background-color: whitesmoke;
`;

export default () => {
  return (
    <Footer>
      {/* Copyright */}
      <Typography variant="body1" color="textSecondary" align="center">
        <Link color="inherit" target="_blank" href="/license.html">
          Terms
        </Link>
        
        <Link color="inherit" target="_blank" href="/license.html" style={{ marginLeft: 16 }}>
          Policy
        </Link>
      </Typography>

      <Typography variant="body1" color="textSecondary" align="center">
        <Link
          color="inherit"
          target="_blank"
          href="https://github.com/tophat-cloud"
        >
          @tophat
        </Link>{" "}
      </Typography>

      

      {/* OpenSourceLicence */}
      <Typography variant="body1" color="textSecondary" align="center">
        <Link color="inherit" target="_blank" href="/license.html">
          Licenses
        </Link>
        
        <Link color="inherit" target="_blank" href="https://github.com/tophat-cloud/cumulus" style={{ marginLeft: 16 }}>
          Github
        </Link>
      </Typography>
    </Footer>
  );
}
