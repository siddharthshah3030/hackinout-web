import { get } from "./common";
import axios from "axios";
import { API_SERVER, DEPLOY_SERVER } from "../config/index";

let data;

export const uploadModel = async function(data) {
  let formData = new FormData();
  for (let idx in data) {
    formData.append("files", data[idx]);
    console.log(data[idx]);
  }
  return await axios
    .post(API_SERVER + "/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      return res.data;
    });
};

export const submitModel = async function(data) {
  return await axios.post(API_SERVER + "/projects", data, {}).then(res => {
    return res.data;
  });
};

export const deployModel = async function(data) {
  return await axios.post(DEPLOY_SERVER + "/convert/" + data, {}).then(res => {
    return res.data;
  });
};

export const submitImage = async function(id, data) {
  return await axios
    .post(DEPLOY_SERVER + "/inference/" + id, data, {})
    .then(res => {
      return res.data;
    });
};

export const getProjects = async function() {
  return await axios.get(API_SERVER + "/projects").then(res => {
    return res.data;
  });
};

export const getProject = async function(data) {
  return await axios.get(API_SERVER + "/projects/" + data).then(res => {
    return res.data;
  });
};
