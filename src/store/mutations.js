import { RES_MOV } from "./mutationsType";
export default {
  [RES_MOV](state, { movs }) {
    state.movieList = movs;
  }
};
