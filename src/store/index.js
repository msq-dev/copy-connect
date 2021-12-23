import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const CC_QUESTIONS =
  process.env.VUE_APP_API_ROOT + process.env.VUE_APP_COPYCONNECT_GET_ALL

// courtesy of StackOverflow
// https://stackoverflow.com/a/12646864
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default new Vuex.Store({
  state: {
    round: 1,
    questions: [],
    timer: 0,
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions
    },
    setTimer(state, timer) {
      state.timer = timer
    },
  },
  actions: {
    getData({ commit }) {
      axios
        .get(CC_QUESTIONS)
        .then((res) => {
          const shuffledQuestions = shuffle(res.data)
          commit("setQuestions", shuffledQuestions)
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
})
