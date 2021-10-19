import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 100px;
  margin-top: auto;
`;

export default () => {
  return (
    <Footer>
      {/* Copyright */}
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          target="_blank"
          href="https://github.com/tophat-cloud"
        >
          tophat-cloud{" "}
        </Link>{" "}
        {new Date().getFullYear()}
        {""}
      </Typography>

      {/* OpenSourceLicence */}
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" target="_blank" href="/license.html">
          {"OpenSourceLicence"}
        </Link>
      </Typography>
    </Footer>
  );
}
