// import axios from "axios";
import { request } from "../network/request";

import { RES_MOV } from "./mutationsType";
export default {
  reqMov({ commit }) {
    request({
      method: "get",
      url: "/j/search_subjects",
      params: {
        type: "movie",
        tag: "热门",
        page_limit: 50,
        page_start: 0
      }
    }).then(res => {
      const movs = res.data.subjects;
      commit(RES_MOV, { movs });
    });
  }
};
