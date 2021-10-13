import * as React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function ProjectSelect() {
  const [projectId, setProjectId] = React.useState("");

  const handleChange = (event) => {
    if (event.target.value === "AddProject") {
      alert("Add project!");
      setProjectId("");
    } else {
      setProjectId(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="select-prject">Select Project</InputLabel>
        <Select
          labelId="select-prject"
          id="select-prject"
          value={projectId}
          label="select-prject"
          onChange={handleChange}
        >
          <MenuItem value={10}>Project1</MenuItem>
          <MenuItem value={20}>Project2</MenuItem>
          <MenuItem value={30}>Project3</MenuItem>
          <MenuItem value={"AddProject"}>Add New Project</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
