<template>
  <div
    :class="`inline-flex items-center justify-center rounded gap-[5px] bg-grey text-white sm:leading-[14.65px] leading-[12.21px] sm:text-[12px] text-[8px] font-bold py-[2px] sm:px-[8px] px-[6px]`"
  >
    <StarIcon />
    <div class="flex items-center justify-center">{{ rating }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import StarIcon from '@/icons/StarIcon.vue'

const props = defineProps({
  rating: {
    type: String,
    default: ''
  }
})
</script>
