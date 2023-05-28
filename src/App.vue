<template>
  <div id="app">
    <div>
      <h2>Question & Answer</h2>
      <div class="box">
        <div>
          <div class="title">
            <p>Question</p>
          </div>
          <div>
            <input class="input-question" v-model="question" />
          </div>
          <div class="mt-4">
            <button class="button" @click="validateAndSubmit()">Submit</button>
          </div>
        </div>
        <hr />
        <div class="mt-4">
          <div class="title">
            <p>Answer</p>
          </div>
          <div class="box-answer">
            <div>
              <p>Test Answer</p>
              <P></P>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aiService from "./service/aiService";

export default {
  name: "App",
  components: {},
  data() {
    return {
      question: "",
      answer: "",
      isValidInput: true,
      lim: 1,
      minscore: 0.1,
      url_base: "https://api.aiforthai.in.th/ptt-qsearch/predict?text=",
    };
  },
  created() {},
  computed: {},
  methods: {
    fetch_question() {
      fetch(`${this.url_base}${this.question}&lim=${this.lim}&minscore=${this.minscore}`)
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(result) {
      this.answer = result;
    },

    DoGetquestionSearch() {
      aiService.GetQuestionSearch(this.question);
    },
    validateInput(input) {
      const regex = /^[a-zA-Z0-9ก-๙เแอ-ฮ]+$/;
      return regex.test(input);
    },
    validateAndSubmit() {
      this.isValidInput = this.validateInput(this.question);
      if (this.isValidInput) {
        this.fetch_question();
      } else {
        alert("กรุณากรอกข้อความอีกครั้งโดยที่ไม่มีอักขระพิเศษ");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .question {
    display: flex;
    justify-content: space-around;
  }
  .box {
    border: 1px solid;
    padding: 20px;
    margin: 50px;
  }
  .title {
    font-weight: bold;
  }
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  .input-question {
    width: 800px;
  }
  .box-answer {
    border: #4caf50 solid 1px;
    padding: 20px;
    margin: 10px 490px 10px 490px;
    height: max-content;
    text-align: start;
  }
}
</style>
