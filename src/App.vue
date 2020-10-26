<template>
  <div id="app">
    <h1 class="title">Copy Connect</h1>
    <span class="subtitle">
      The shameless rip-off of BBC's Only Connect
    </span>
    <QuestionContainer />
  </div>
</template>

<script>
import QuestionContainer from "./components/QuestionContainer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    QuestionContainer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  touch-action: manipulation;
}

.title {
  margin-bottom: 0;
}

.subtitle {
  font-size: 80%;
  text-align: center;
  line-height: 1.5;
  margin-top: 0.25rem;
  margin-bottom: 0.4rem;
}
</style>
