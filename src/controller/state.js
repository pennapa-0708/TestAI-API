const state = {
  questionSearchLoadingStatus: 0,
  questionSearchlist: [],
};
const gatters = {
  GetQuestionSearch: (state) => {
    return state.questionSearchlist;
  },
  GetQuestionSearchLoadingStatus: (state) => {
    return state.questionSearchLoadingStatus;
  },
};
export { state, gatters };
