import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function ProjectSelect() {
  //   const [projectId, setProjectId] = React.useState("");

  //   ddd

  const [projectsList, setProjectsList] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("초기값..");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 setProjectsList를 초기화
        setError(null);
        setProjectsList([]);
        // loading 상태를 true로 설정
        setLoading(true);
        const response = await axios.get(
          "https://api.cumulus.tophat.cloud/project"
        );
        setProjectsList(response.data); // 데이터는 response.data 안에 들어있다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  //   console.log(projectsList);

  // ddd

  const handleChange = (event) => {
    if (event.target.value === "AddProject") {
      alert("Add project!");
      setSelectedProjectId(null);
    } else {
      alert(event.target.value);
      setSelectedProjectId(event.target.value);
      console.log(selectedProjectId);
      alert(selectedProjectId);
    }
  };

  return (
    <Box sx={{ minWidth: 120, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="select-prject">Select Project</InputLabel>
        <Select
          labelId="select-prject"
          id="select-prject"
          //   value={selectedProjectId}
          label="select-prject"
          onChange={handleChange}
        >
          {projectsList.map((projects) => (
            <MenuItem value={projects.id}> {projects.title} </MenuItem>
          ))}

          <MenuItem value={"AddProject"}>Add New Project</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
