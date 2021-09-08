import React from "react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import DashboardComponent from "../Dashboard";
import { useStyles } from "../useStyles";

const informationMarkdown = `

# Documents

## SDK 연결 방법

To install a SDK, simply add package like belows\:

\`\`\`
npm install --save https://github.com/tophat-cloud/cumulus
yarn add https://github.com/tophat-cloud/cumulus
\`\`\`

Setup and usage of these SDKs always follows the same principle.

\`\`\`javascript
import { protect } from 'cumulus';

protect({
  key: '__key__',
});

captureMessage('Hello, world!');
\`\`\``;

export default function Information() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <DashboardComponent>
      <ReactMarkdown>{informationMarkdown}</ReactMarkdown>
    </DashboardComponent>
  );
}
