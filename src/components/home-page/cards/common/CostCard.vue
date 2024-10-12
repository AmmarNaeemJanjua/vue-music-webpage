<template>
  <div :class="`rounded font-bold ${additionalClasses}`">
    {{ `€${cost}` }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  cost: {
    type: String,
    default: ''
  },
  additionalClasses: {
    type: String,
    default: ''
  }
})
</script>
