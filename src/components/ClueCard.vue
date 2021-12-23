<template>
  <div
    class="clue-card"
    :class="{ 'is-flipped': flipped }"
    @click="flipClueCard"
  >
    <div class="clue-card-front" :class="{ forbidden: isForbidden }">
      Clue {{ index + 1 }}
    </div>
    <div
      v-if="pictureClue"
      class="clue-card-back"
      :style="pictureClueStyles"
    ></div>
    <div v-else class="clue-card-back">{{ clue }}</div>
  </div>
</template>

<script>
const IMG_FILE_EXTENSIONS = ["jpg", "jpeg", "png", "gif"]
const IMG_URL = process.env.VUE_APP_PICTURE_CLUES

export default {
  name: "ClueCard",
  data() {
    return {
      flipped: false,
      isForbidden: false,
    }
  },
  props: {
    isNext: Boolean,
    index: Number,
    clue: String,
    timer: Number,
    timerRunning: Boolean,
  },
  computed: {
    pictureClue() {
      const splitFileName = this.clue.split(".")
      const fileExtension = splitFileName[splitFileName.length - 1]
      return IMG_FILE_EXTENSIONS.includes(fileExtension)
    },
    pictureClueStyles() {
      return {
        backgroundImage: `url(${IMG_URL + this.clue})`,
        backgroundSize: "cover",
      }
    },
  },
  methods: {
    flipClueCard() {
      if (this.flipped) {
        return
      }
      if (!this.isNext) {
        this.handleForbidden()
        return
      }
      if (!this.timer) {
        this.flipped = true
        this.$emit("flipped", this.index)
        return
      }
      if (!this.timerRunning && this.index > 0) {
        this.handleForbidden()
        return
      }
      this.flipped = true
      this.$emit("flipped", this.index)
    },

    handleForbidden() {
      this.isForbidden = true
      setTimeout(() => {
        this.isForbidden = false
      }, 200)
    },
  },
}
</script>

<style>
.clue-card {
  --oc-gradient: linear-gradient(
    173deg,
    rgba(181, 220, 246, 1) 0%,
    rgba(181, 220, 246, 1) 25%,
    rgba(186, 222, 247, 1) 30%,
    rgba(173, 212, 245, 1) 31%,
    rgba(173, 212, 245, 1) 100%
  );

  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.clue-card.is-flipped {
  transform: rotateY(180deg);
}

.clue-card-front,
.clue-card-back {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: var(--bor-rad);
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.clue-card-front {
  background: var(--oc-gradient);
}

.clue-card-front.forbidden {
  border: 3px solid var(--clr-warning);
}

.clue-card-back {
  color: var(--blue-100);
  background-color: var(--blue-solid);
  transform: rotateY(180deg);
}
</style>
