import axiosIns from "./axios"; 
import config from "./config"; 
import httpUtil from "../../util/http";

export default httpUtil(axiosIns,config)