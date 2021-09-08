import React from "react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import { CopyBlock, dracula } from "react-code-blocks";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import DashboardComponent from "../Dashboard";
import { useStyles } from "../useStyles";

const information1 = `
# Documents

## Cumulus SDKs for JavaScript

To install a SDK, simply add package like belows\:
`;

const information2 = `npm install --save https://github.com/tophat-cloud/cumulus
yarn add https://github.com/tophat-cloud/cumulus
`;

const information3 = `Setup and usage of these SDKs always follows the same principle.`;

const information4 = `import { protect } from 'cumulus';

protect({
  key: 'KMsB9W4hZCejJ6D1fiESP',
});

captureMessage('Hello, world!');
`;

export default function Information() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <DashboardComponent>
      <ReactMarkdown>{information1}</ReactMarkdown>

      <CopyBlock
        language={"bash"}
        text={information2}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <br />

      <ReactMarkdown>{information3}</ReactMarkdown>

      <CopyBlock
        language={"javascript"}
        text={information4}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </DashboardComponent>
  );
}
