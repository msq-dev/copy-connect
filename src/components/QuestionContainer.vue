<template>
  <div class="question-container">
    <h3>Frage {{ currentQuestion + 1 }}</h3>
    <div class="clue-card-container">
      <ClueCard
        clue="Start"
        :content="q.questions_round01[currentQuestion].firstClue"
        :picture="q.questions_round01[currentQuestion].picture"
        class="clue-card-first is-flipped"
      />
      <ClueCard
        v-for="clue in q.questions_round01[currentQuestion].clues"
        :key="
          'Q' +
            q.questions_round01[currentQuestion].questionId +
            'C' +
            clue.clueId
        "
        :clue="'Clue ' + clue.clueId"
        :content="clue.content"
        :picture="q.questions_round01[currentQuestion].picture"
      />
    </div>
    <div class="answer-container" :class="{ answer: showAnswer }" @click="toggleAnswer()">
      {{
      showAnswer
      ? q.questions_round01[currentQuestion].answer
      : "Lösung anzeigen"
      }}
    </div>
    <button class="next-button" @click="getNextQuestion()">nächste Frage</button>
  </div>
</template>

<script>
import ClueCard from "../components/ClueCard.vue";
import questions from "../assets/json/questions_round01.json";

export default {
  name: "QuestionContainer",
  data() {
    return {
      showAnswer: false,
      currentQuestion: 0,
      q: questions,
    };
  },
  methods: {
    getNextQuestion: function () {
      this.showAnswer = false;
      this.currentQuestion += 1;
      if (this.currentQuestion > this.q.questions_round01.length - 1) {
        this.currentQuestion = 0;
      }
    },
    toggleAnswer: function () {
      this.showAnswer = !this.showAnswer;
    },
  },
  components: {
    ClueCard,
  },
};
</script>

<style scoped>
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  --card-size: 10rem;
  --grid-gap-size: 1rem;
}

.question-container {
  max-width: calc(var(--card-size) * 2 + var(--grid-gap-size));
}

.clue-card-container {
  display: grid;
  grid-template-columns: repeat(2, var(--card-size));
  grid-template-rows: repeat(2, var(--card-size));
  grid-gap: var(--grid-gap-size);
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  perspective: 600px;
}

.answer-container {
  background-color: #002b5f;
  color: #66809f;
  cursor: pointer;
  padding: 0.75rem;
  text-align: center;
  line-height: 1.3rem;
  margin-bottom: 1.5rem;
  border-radius: 6px;
}

.answer {
  color: #fff;
}

.next-button {
  border: 2px solid;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  font-size: inherit;
  background: none;
}
</style>
