<template>
  <button :class="`inline-flex items-center justify-center rounded-[4px]  ${additionalClasses}`">
    <!-- Render the icon if provided -->
    <component :is="icon" v-if="icon" />
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: Object, // The icon component passed as a prop
    default: null
  },
  text: {
    type: String,
    default: ''
  },
  additionalClasses: {
    type: String,
    default: ''
  }
})
</script>
