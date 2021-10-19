import axios from "axios";

export default {
  // rest-auth
  register: async (params) => {
    const { data } = await axios.post('/rest-auth/registration/', params);
    return data;
  },
  login: async (params) => {
    const { data } = await axios.post('/rest-auth/login/', params);
    return data;
  },
  // project
  getProjectList: async (params) => {
    const { data } = await axios.get('/project', params);
    return data;
  },
  createProject: async (params) => {
    const { data } = await axios.post('/project', params);
    return data;
  },
  // thunder
  getThunderList: async (params) => {
    const { data } = await axios.post('/thunder', params);
    return data;
  },
  getThunderStats: async (params) => {
    const { data } = await axios.post('/thunder/counts/recent', params);
    return data;
  },
  getThunderDetail: async (params) => {
    const { data } = await axios.post('/thunder', params);
    return data;
  },
};
