<template>
  <base-icon v-bind="$props">
    <circle
      cx="12"
      cy="12"
      r="10"
    />
    <polygon points="10 8 16 12 10 16 10 8" />
  </base-icon>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"

export default {
  name: "IconPlay",
  components: {
    BaseIcon,
  },
  props: {
    size: Number,
    colorFill: String,
    colorStroke: String,
    widthStroke: Number,
  },
}
</script>
