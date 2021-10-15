import React from "react";
import ReactMarkdown from "react-markdown";
import OpenSourceLicenseComponent from "../dashboard/Dashboard";

const information1 = `
# OpenSourceLicense

## SDK
## Scanner
## Front
## Back
`;

export default function Information() {
  return (
    <OpenSourceLicenseComponent>
      <ReactMarkdown>{information1}</ReactMarkdown>
    </OpenSourceLicenseComponent>
  );
}
