import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

export default function ProjectSelect() {
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
        const response = await axios.get(
          "/project"
        );
        setProjectsList(response.data); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchProjects();
  }, [makeNewProject]);

  //   console.log(projectsList);

  const handleChange = (event) => {
    if (event.target.value === "AddProject") {
      var date = new Date(); // 현재 날짜 및 시간

      var newProjectName = prompt(
        "Please input the new project name you want to add.",
        `project - ${date.toLocaleString().replace(/ /g, "")}`
      );

      async function addNewProject() {
        await axios
          .post("/project", {
            domain: "no-domain-data", // back-end에서 null 허용 후 삭제
            title: newProjectName,
            member: 8, // 로그인 기능 구현 후 수정
          })
          .then(function (response) {
            // console.log(response);
            // console.log(response.data);
            setMakeNewProject(makeNewProject + 1);
            // console.log(makeNewProject);
            alert(`Successfully added project: ${newProjectName}`);
          })
          .catch(function (error) {
            console.log(error.response);
            alert(`프로젝트 추가 에러: ${error}`);
          })
          .then(function () {
            // 항상 실행
            setSelectedProjectId(null);
          });
      }
      addNewProject();
    } else {
      selectedProjectId = event.target.value;
      setSelectedProjectId(event.target.value);
      window.localStorage.setItem("key", selectedProjectId);
      // alert(`선택된 프로젝트 ID: ${selectedProjectId}`);
      window.location.reload();
    }
  };

  return (
    <Box sx={{ minWidth: 120, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="select-prject">Select Project</InputLabel>
        <Select
          labelId="select-prject"
          id="select-prject"
          value={key}
          label="select-prject"
          onChange={handleChange}
        >
          <MenuItem
            style={{ backgroundColor: "#d5e1df", fontWeight: "bold" }}
            value={"AddProject"}
          >
            <ControlPointIcon style={{ marginRight: "7px" }} /> Add New Project
          </MenuItem>

          {projectsList.map((projects) => (
            <MenuItem value={projects.id}> {projects.title} </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
