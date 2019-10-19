import { get } from "./common";
import axios from "axios";
import { API_SERVER } from "../config/index";

let data;

function uploadModel(data) {
  axios
    .post(API_SERVER + "/upload/model", data, {
      // receive two parameter endpoint url ,form data
    })
    .then(res => {
      // then print response status
      console.log(res.statusText);
    });
}
