<template>
  <div class="grid grid-cols-12 gap-[16px] pt-4">
    <p
      class="font-druk-wide text-dark-grey col-span-12 sm:col-span-8 text-[16px] sm:text-[24px] leading-[20.88px] sm:leading-[56px] font-normal sm:font-medium sm:text-right"
    >
      EXPLORE <span class="hidden sm:inline">MUSIC</span>
    </p>
    <div class="col-span-12 sm:col-span-4 text-right content-center sm:mb-0 mb-[24px]">
      <Tab />
    </div>
  </div>
</template>

<script setup>
import Tab from '@/components/common/Tab.vue'
</script>

<style lang="scss" scoped></style>
