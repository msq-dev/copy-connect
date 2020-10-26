<template>
  <div
    class="clue-card"
    :class="{ 'is-flipped': showClue }"
    @click="toggleClue()"
  >
    <div class="clue-card-front">{{ clue }}</div>
    <div
      v-if="picture"
      class="clue-card-back picture-clue"
      :style="style"
    ></div>
    <div v-else class="clue-card-back">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "ClueCard",
  data() {
    return {
      showClue: false,
    };
  },
  props: {
    picture: Boolean,
    content: String,
    clue: String,
  },
  methods: {
    toggleClue: function() {
      this.showClue = !this.showClue;
    },
  },
  computed: {
    style() {
      return "background-image:" + "url(" + this.content + ")";
    },
  },
};
</script>

<style scoped>
.clue-card {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  hyphens: auto;
}

.clue-card.is-flipped {
  transform: rotateY(180deg);
}

.picture-clue {
  background-size: cover;
  border-radius: 6px;
}

.clue-card-front,
.clue-card-back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border-radius: 6px;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.clue-card-front {
  background: linear-gradient(
    173deg,
    rgba(181, 220, 246, 1) 0%,
    rgba(181, 220, 246, 1) 25%,
    rgba(186, 222, 247, 1) 30%,
    rgba(173, 212, 245, 1) 31%,
    rgba(173, 212, 245, 1) 100%
  );
}

.clue-card-back {
  color: #fff;
  background-color: #002b5f;
  transform: rotateY(180deg);
}
</style>
