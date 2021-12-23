<template>
  <div id="app">
    <nav v-if="$route.name !== 'Home'">
      <router-link to="/">
        <span class="arrow-back">&#10142;</span>Startseite
      </router-link>
      <router-link
        v-if="$route.name !== 'Einstellungen'"
        to="/settings"
      >
        <IconSettings :size="18" />
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import IconSettings from "@/components/IconSettings.vue"

export default {
  name: "App",
  components: {
    IconSettings,
  },
}
</script>

<style>
@font-face {
  font-family: "DIN Regular";
  src: url("./assets/fonts/DINPro-Regular.otf") format("opentype");
  font-weight: normal;
}

@font-face {
  font-family: "DIN Bold";
  src: url("./assets/fonts/DINPro-Bold.otf") format("opentype");
  font-weight: bold;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

img {
  max-width: 100%;
  display: block;
}

:root {
  --clr-warning: hsl(5, 82%, 40%);
  --blue-100: hsl(213, 100%, 90%);
  --blue-400: hsl(213, 56%, 67%);
  --blue-700: hsl(213, 56%, 40%);
  --blue-900: hsl(213, 56%, 28%);
  --blue-solid: hsl(213, 100%, 19%);
  --bor-rad: 5px;
}

html {
  min-height: 100vh;
  background: linear-gradient(187deg, var(--blue-900) 0%, var(--blue-400) 100%)
    no-repeat;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
b,
strong {
  font-family: "DIN Bold", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  margin: 0 auto;
  font-family: "DIN Regular", sans-serif;
  line-height: 1.4em;
}

a {
  text-decoration: none;
  color: currentColor;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  color: var(--blue-400);
}

nav + div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav + div > h1 {
  color: var(--blue-100);
  margin: 0 0 1rem;
  font-size: 1.5rem;
  align-self: flex-start;
}

button {
  cursor: pointer;
  font: inherit;
  color: inherit;
  border: none;
}

#app {
  touch-action: manipulation;
  width: 90%;
  margin: 0 auto;
}

.arrow-back {
  font-size: 110%;
  display: inline-block;
  vertical-align: top;
  margin-right: 0.5rem;
  transform: scaleX(-1);
}

input,
button,
select,
a,
div {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
