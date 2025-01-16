import {fetchNewsList, fetchJobsList, fetchAsksList} from '../api/index.js';

export default {
  FETCH_ASKS({ commit }) {
    fetchAsksList()
      .then((response) => {
        commit("SET_ASKS", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then((response) => {
        commit("SET_JOBS", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then((response) => {
        commit("SET_NEWS", response.data);
      })
      .catch((error) => console.log(error));
  },
};
