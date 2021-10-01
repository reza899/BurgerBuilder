import axios from "axios";

const httpService = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
});

httpService.interceptors.request.use((config) => {
  config.headers["X-Parse-REST-API-Key"] =
    "vtbjW8adVv4QLsVFydONmMMsacgzTlwR7MLQU3gd";
  config.headers["X-Parse-Application-Id"] =
    "pMInKdMCLTYbUaJHC5QA87P8BcSfRkOlLOJs7tzw";
  return config;
}, undefined);

export default httpService;
