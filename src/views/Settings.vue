<template>
  <div class="settings">
    <h1>Einstellungen</h1>
    <div class="settings-container">
      <div class="form-label">Schwierigkeitsgrad:</div>
      <div
        v-for="[key, value] in Object.entries(options)"
        :key="key"
        class="form-control"
      >
        <input type="radio" :id="key" :value="value" v-model="timer" />
        <label :for="key">
          <span>{{ key.split(":")[0] }}:</span
          ><span>{{ key.split(":")[1] }}</span>
        </label>
      </div>
    </div>
    <router-link @click.native="saveSettings" to="/game">
      <IconPlay :size="50" :widthStroke="1" />
    </router-link>
  </div>
</template>

<script>
import IconPlay from "@/components/IconPlay.vue"

export default {
  name: "Settings",
  components: {
    IconPlay,
  },
  data() {
    return {
      timer: 0,
      options: {
        "Normal: keine Zeitbeschränkung": 0,
        "Mittel: 90 Sek.": 90,
        "Original: 40 Sek.": 40,
      },
    }
  },
  methods: {
    saveSettings() {
      this.$store.commit("setTimer", this.timer)
    },
  },
}
</script>

<style>
.settings-container {
  align-self: flex-start;
  padding: 1rem 1rem 5rem;
  margin: 2rem 0 5rem;
  font-size: 1.2rem;
  background-color: var(--blue-100);
  border-radius: var(--bor-rad);
}

.form-label {
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.form-control + .form-control {
  margin-top: 0.7em;
}

.form-control {
  --radio-size: 1.1em;

  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

input[type="radio"] {
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: var(--radio-size);
  height: var(--radio-size);
  border-radius: 50%;
  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: calc(var(--radio-size) * 0.7);
  height: calc(var(--radio-size) * 0.7);
  border-radius: 50%;
  transform: scale(0);
  transition: 0.15s transform ease-in-out;
  box-shadow: inset 1em 1em var(--blue-400);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

.form-control > label {
  display: grid;
  grid-template-columns: 8ch auto;
}
</style>
