import React, { useState, useEffect } from "react";
// import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import { CopyBlock, dracula } from "react-code-blocks";

import api from "../../utils/api";

let key = window.localStorage.getItem("key");

if (key == null) {
  key = "add-project-before-setup";
}

const installCode = `
npm install --save https://github.com/tophat-cloud/cumulus
yarn add https://github.com/tophat-cloud/cumulus
`.trim();

const runCode = `
import { protect, captureMessage } from 'cumulus';

protect({
  key: '${key}',
});

captureMessage('Hello, world!');
`.trim();

export default () => {
  useEffect(() => {
    checkNoProject();
  }, []);

  const checkNoProject = async () => {
    const projectList = await api.getProjectList();
    const isNoProject = projectList.length < 1;

    if (isNoProject) {
      alert(
        "You haven't any project. Add new project to start tracking weakness!"
      );
    }
  };

  return (
    <div>
      <p style={{ fontWeight: 500, fontSize: 24, marginBottom: 8 }}>
        Documents
      </p>

      <p style={{ fontWeight: 500, fontSize: 20, marginBottom: 8 }}>Setup</p>

      <p style={{ marginBottom: 8 }}>
        To install a SDK, simply add package like belows:
      </p>

      <CopyBlock
        language={"bash"}
        text={installCode}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <br />

      <p style={{ marginBottom: 8 }}>
        Setup and usage of these SDKs always follows the same principle.
      </p>

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
};
