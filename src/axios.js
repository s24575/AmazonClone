import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-a4c40/us-central1/api",
});
// "https://us-central1-clone-a4c40.cloudfunctions.net/api",

export default instance;
