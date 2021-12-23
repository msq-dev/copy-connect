<template>
  <div
    class="timer"
    :style="styles"
  />
</template>

<script>
export default {
  name: "BarTimer",
  props: {
    timer: Number,
    timerRunning: Boolean,
    timeRemaining: Number,
  },
  computed: {
    styles() {
      return {
        width: `${(this.timeRemaining / this.timer) * 100}%`,
        backgroundColor: `${
          this.timeRemaining > 10 ? "var(--blue-400)" : "var(--clr-warning)"
        }`,
      }
    },
  },
  watch: {
    timerRunning(running) {
      if (running) {
        this.countDown()
      }
    },
  },
  methods: {
    countDown() {
      setTimeout(() => {
        if (this.timerRunning && this.timeRemaining > 1) {
          this.$emit("countDown", -1)
          this.countDown()
        } else {
          this.$emit("countDown", -1)
          this.$emit("stopTimer")
        }
      }, 1000)
    },
  },
}
</script>

<style>
.timer {
  align-self: flex-start;
  height: 0.5rem;
  margin: 0 0 1rem;
  /* transition: width 1s linear; */
}
</style>
