<template>
  <div class="game">
    <h1>Frage {{ currentQuestion + 1 }}</h1>
    <BarTimer
      v-if="timer"
      :timer="timer"
      :timeRemaining="timeRemaining"
      :timerRunning="timerRunning"
      @countDown="handleCountDown"
      @stopTimer="handleStopTimer"
    />
    <div class="clue-cards-container">
      <ClueCard
        v-for="(clue, index) in currentClues"
        :key="clue"
        :clue="clue"
        :index="index"
        :isNext="index === lastFlippedClue + 1"
        :timer="timer"
        :timerRunning="timerRunning"
        :ref="'clue' + index"
        @flipped="handleFlip"
      />
    </div>
    <div
      v-if="answerProposed && this.lastFlippedClue === 3"
      class="answer-container"
      :class="{ answer: answerShown }"
      @click="answerShown = true"
    >
      {{ answerShown ? currentAnswer : "Lösung anzeigen" }}
    </div>

    <button
      v-if="timerRunning"
      class="btn-buzzer"
      @click="handleBuzzer"
    ></button>

    <button
      v-if="showProposalBtn"
      class="btn-transparent"
      @click="proposeAnswer"
    >
      Ich möchte lösen/die Lösung sehen
    </button>

    <button
      v-if="answerShown"
      class="btn-transparent btn-next"
      @click="getNextQuestion"
    >
      nächste Frage
    </button>
  </div>
</template>

<script>
import ClueCard from "@/components/ClueCard.vue"
import BarTimer from "@/components/BarTimer.vue"

export default {
  name: "Game",
  components: {
    ClueCard,
    BarTimer,
  },
  computed: {
    questions() {
      return this.$store.state.questions
    },
    timer() {
      return this.$store.state.timer
    },
    showProposalBtn() {
      if (this.lastFlippedClue < 0) {
        return false
      }
      if (this.answerProposed) {
        return false
      }
      if (!this.buzzerHit && this.timeRemaining) {
        return false
      }
      return true
    },
  },
  watch: {
    questions(loaded) {
      if (loaded) {
        this.setupQuestion()
      }
    },
  },
  data() {
    return {
      currentQuestion: 0,
      currentClues: [],
      currentAnswer: "",
      lastFlippedClue: -1,
      buzzerHit: false,
      answerProposed: false,
      answerShown: false,
      timeRemaining: 0,
      timerRunning: false,
    }
  },
  methods: {
    setupQuestion() {
      (this.currentClues = [
        this.questions[this.currentQuestion].clue_01,
        this.questions[this.currentQuestion].clue_02,
        this.questions[this.currentQuestion].clue_03,
        this.questions[this.currentQuestion].clue_04,
      ]),
      (this.currentAnswer = this.questions[this.currentQuestion].answer)
      this.lastFlippedClue = -1
      this.buzzerHit = false
      this.answerShown = false
      this.answerProposed = false
      this.timeRemaining = this.timer
      this.timerRunning = false
    },

    handleFlip(clueIndex) {
      this.lastFlippedClue = clueIndex
      if (clueIndex === 0) {
        if (!this.timer) {
          this.buzzerHit = true
          return
        }
        this.timerRunning = true
      }
    },

    handleCountDown(decrement) {
      this.timeRemaining += decrement
    },

    handleBuzzer() {
      this.buzzerHit = true
      this.handleStopTimer()
    },

    handleStopTimer() {
      this.timerRunning = false
      if (!this.buzzerHit) {
        this.proposeAnswer()
      }
    },

    async proposeAnswer() {
      this.answerProposed = true
      for (const c in this.$refs) {
        const card = this.$refs[c][0].$el
        if (!card.classList.contains("is-flipped")) {
          await this.flipRemainingCard(card)
        }
      }
      this.lastFlippedClue = 3
    },

    flipRemainingCard(card) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(card.classList.add("is-flipped"))
        }, 700)
      })
    },

    getNextQuestion() {
      this.currentQuestion++
      if (this.currentQuestion > this.questions.length - 1) {
        this.currentQuestion = 0
      }
      this.setupQuestion()
    },
  },
  mounted() {
    this.$store.dispatch("getData")
  },
}
</script>

<style>
.game {
  --card-size: 10;

  width: calc(calc(2 * var(--card-size) + 1) * 1rem);
  margin-bottom: 20rem;
}

.clue-cards-container {
  display: grid;
  grid-template-columns: repeat(2, calc(var(--card-size) * 1rem));
  grid-template-rows: repeat(2, calc(var(--card-size) * 1rem));
  grid-gap: 1rem;
  margin: 0 0 1rem;
}

.answer-container {
  background-color: var(--blue-solid);
  color: var(--blue-400);
  cursor: pointer;
  padding: 0.75rem;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: var(--bor-rad);
  width: 100%;
}

.answer-container.answer {
  color: var(--blue-100);
}

.btn-buzzer {
  width: 6rem;
  height: 6rem;
  margin-top: 1rem;
  border-radius: 100vw;
  background-color: var(--clr-warning);
  box-shadow: inset -1.5rem -1rem 40px rgb(0 0 0 / 0.5),
    0 0 0 0.7rem var(--blue-solid);
  background-image: linear-gradient(
    -45deg,
    rgb(255 255 220 / 0.3) 0%,
    transparent 100%
  );
}

.btn-transparent {
  font-weight: normal;
  border: 2px solid currentColor;
  padding: 0.5rem 0.7rem;
  border-radius: var(--bor-rad);
  background: none;
}

.btn-next {
  align-self: flex-end;
}
</style>
