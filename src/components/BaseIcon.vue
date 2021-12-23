<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="colorFill"
    :stroke="colorStroke"
    :stroke-width="widthStroke"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    size: {
      type: Number,
      default: 18,
    },
    colorFill: {
      type: String,
      default: "none",
    },
    colorStroke: {
      type: String,
      default: "currentColor",
    },
    widthStroke: {
      type: Number,
      default: 2,
    },
  },
}
</script>
