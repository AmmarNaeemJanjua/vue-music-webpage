<template>
  <div class="sm:pb-[32px] pb-[24px]">
    <div class="flex justify-between">
      <div
        class="font-bold sm:text-[18px] text-[13px] text-dark-blue sm:leading-[21.98px] leading-[15.87px]"
      >
        Hot New Songs
      </div>
      <div class="flex items-center gap-[10px] pb-[12px]">
        <div
          class="text-dark-blue sm:text-[12px] sm:leading-[14.65px] sm:font-bold text-[9px] leading-[10.99px] font-bold"
        >
          SEE MORE
        </div>
        <Button :icon="ChevronLeftIcon" :additionalClasses="'bg-light-grey-1 p-[7px] sm:p-[8px]'" />
        <Button
          :icon="ChevronRightIcon"
          :additionalClasses="'bg-light-grey-1 p-[7px] sm:p-[8px]'"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-[25px] gap-y-[10px]"
    >
      <template v-for="song in songs" :key="song.id">
        <SongCard :item="song" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Button from '@/components/common/Button.vue'
import ChevronLeftIcon from '@/icons/ChevronLeftIcon.vue'
import ChevronRightIcon from '@/icons/ChevronRightIcon.vue'
import SongCard from '@/components/home-page/cards/SongCard.vue'

const props = defineProps({
  songs: {
    type: Array,
    default: []
  }
})
</script>

<style lang="scss" scoped></style>
