import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import api from '../utils/api';

export default () => {
  //   const [projectId, setProjectId] = React.useState("");

  const [projectsList, setProjectsList] = useState([]);
  let [selectedProjectId, setSelectedProjectId] = useState(null);
  const [loading, setLoading] = useState(false); // eslint-disable-line no-unused-vars
  const [error, setError] = useState(null); // eslint-disable-line no-unused-vars

  const [makeNewProject, setMakeNewProject] = useState(0);
  const [key, setKey] = useState("");

  useEffect(() => {
    const key = window.localStorage.getItem("key");
    setKey(key || "");
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 setProjectsList를 초기화
        setError(null);
        setProjectsList([]);
        // loading 상태를 true로 설정
        setLoading(true);
        const data = await api.getProjectList();
        setProjectsList(data); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchProjects();
  }, [makeNewProject]);

  //   console.log(projectsList);

  const handleChange = async (event) => {
    if (event.target.value === "AddProject") {
      var date = new Date(); // 현재 날짜 및 시간

      var newProjectName = prompt(
        "Please input the new project name you want to add.",
        `project - ${date.toLocaleString().replace(/ /g, "")}`
      );

      try {
        const data = await api.createProject({
          domain: '',
          title: newProjectName,
          // member: 8,
        });
  
        setMakeNewProject(makeNewProject + 1);
        alert(`Successfully added project: ${newProjectName}`);
      } catch (err) {
        console.log(error.response);
        alert(`프로젝트 추가 에러: ${error}`);
      }

      setSelectedProjectId(null);
      return;
    }

    selectedProjectId = event.target.value;
    setSelectedProjectId(event.target.value);
    window.localStorage.setItem("key", selectedProjectId);
    // alert(`선택된 프로젝트 ID: ${selectedProjectId}`);
    window.location.reload();
  };

  return (
    <Box sx={{ width: 120, height: '100%' }}>
      <Select
        labelId="select-prject"
        id="select-prject"
        value={key || 'add'}
        label="select-prject"
        onChange={handleChange}
      >
        <MenuItem
          style={{ backgroundColor: "#d5e1df", fontWeight: "bold" }}
          value='add'
        >
          <ControlPointIcon style={{ marginRight: "7px" }} />
          Project
        </MenuItem>

        {
          projectsList.map((projects) => (
            <MenuItem
              value={projects.id}
            >
              {projects.title}
            </MenuItem>
          ))
        }
      </Select>
    </Box>
  );
}
