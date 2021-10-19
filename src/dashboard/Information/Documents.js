import React from "react";
// import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import { CopyBlock, dracula } from "react-code-blocks";

const key = window.localStorage.getItem("key");

const installCode = `
npm install --save https://github.com/tophat-cloud/cumulus
yarn add https://github.com/tophat-cloud/cumulus
`

const runCode = `
import { protect } from 'cumulus';

protect({
  key: '${key}',
});

captureMessage('Hello, world!');
`.trim();

export default () => {
  return (
    <div>
      <p style={{ fontWeight: 500, fontSize: 24, marginBottom: 8 }}>
        Documents
      </p>

      <p style={{ fontWeight: 500, fontSize: 20, marginBottom: 8 }}>
        Setup
      </p>

      <p style={{ marginBottom: 8}}>To install a SDK, simply add package like belows:</p>


      <CopyBlock
        language={"bash"}
        text={installCode}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <br />

      <p style={{ marginBottom: 8}}>Setup and usage of these SDKs always follows the same principle.</p>

      <CopyBlock
        language={"javascript"}
        text={runCode}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
