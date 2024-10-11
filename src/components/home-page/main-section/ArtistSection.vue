<template>
  <div class="sm:pb-[32px] pb-[24px]">
    <div class="flex justify-between">
      <div class="font-bold sm:text-[18px] text-[13px] sm:leading-[21.98px] leading-[15.87px]">
        Trending Artist This Week
      </div>
      <div class="flex items-center gap-[10px] pb-[12px]">
        <div
          class="sm:text-[12px] sm:leading-[14.65px] sm:font-bold text-[9px] leading-[10.99px] font-bold"
        >
          SEE MORE
        </div>
        <Button :icon="ChevronLeftIcon" :additionalClasses="'bg-[#E4E6EB] p-[7px] sm:p-[8px]'" />
        <Button :icon="ChevronRightIcon" :additionalClasses="'bg-[#E4E6EB] p-[7px] sm:p-[8px]'" />
      </div>
    </div>
    <div class="flex overflow-x-auto w-full sm:gap-[30px] gap-[10px]">
      <template v-for="artist in artists" :key="artist.id">
        <div class="flex-shrink-0">
          <ArtistCard :item="artist" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Button from '@/components/common/Button.vue'
import ChevronLeftIcon from '@/icons/ChevronLeftIcon.vue'
import ChevronRightIcon from '@/icons/ChevronRightIcon.vue'
import ArtistCard from '@/components/home-page/cards/ArtistCard.vue'

const props = defineProps({
  artists: {
    type: Array,
    default: []
  }
})
</script>

<style lang="scss" scoped></style>
