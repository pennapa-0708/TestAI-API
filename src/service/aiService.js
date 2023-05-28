import axios from "axios";
export default {
  GetQuestionSearch(question) {
    // debugger; // eslint-disable-line no-debugger
    const text = question;
    const lim = 1;
    const minscore = 0.1;

    return axios
      .get("https://api.aiforthai.in.th/ptt-qsearch/predict?text=" + text + "&lim=" + lim + "&minscore=" + minscore)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => err.response);
  },
};
