import { get } from "./common";
import axios from "axios";
import { API_SERVER } from "../config/index";

let data;

export const uploadModel = async function(data) {
  let formData = new FormData();
  formData.append("files", data);
  return await axios
    .post(API_SERVER + "/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      return res.data[0];
    });
};

export const submitModel = async function(data) {
  return await axios.post(API_SERVER + "/projects", data, {}).then(res => {
    return res.data;
  });
};
