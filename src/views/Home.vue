<template>
  <div class="home">
    <h1 class="title">Copy Connect</h1>
    <div class="subtitle">The shameless rip-off of BBC's Only Connect</div>
    <div class="game-links">
      <router-link to="/game"
        ><IconPlay :size="sizeIcon" :widthStroke="1"
      /></router-link>
      <router-link to="/rules"
        ><IconRules :size="sizeIcon" :widthStroke="1"
      /></router-link>
      <router-link to="/settings"
        ><IconSettings :size="sizeIcon" :widthStroke="1"
      /></router-link>
    </div>
  </div>
</template>

<script>
import IconPlay from "@/components/IconPlay.vue"
import IconRules from "@/components/IconRules.vue"
import IconSettings from "@/components/IconSettings.vue"

export default {
  name: "Home",
  components: {
    IconPlay,
    IconRules,
    IconSettings,
  },
  data() {
    return {
      sizeIcon: 50,
    }
  },
}
</script>

<style>
.home {
  display: grid;
  place-items: center;
  margin-top: 25vh;
  color: var(--blue-100);
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
}

.game-links {
  display: flex;
  gap: 4rem;
  margin-top: 25vh;
}
</style>
