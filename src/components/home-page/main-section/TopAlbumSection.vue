<template>
  <div class="sm:pb-[32px] pb-[24px]">
    <div class="flex justify-between">
      <div
        class="font-bold text-dark-blue sm:text-[18px] text-[13px] sm:leading-[21.98px] leading-[15.87px]"
      >
        Top Albums of the Week
      </div>
      <div class="flex items-center gap-[10px] pb-[12px]">
        <div
          class="text-dark-blue sm:text-[12px] sm:leading-[14.65px] sm:font-bold text-[9px] leading-[10.99px] font-bold"
        >
          SEE ALL
        </div>
        <Button
          :icon="ChevronRightIcon"
          :additionalClasses="'bg-light-grey-1 p-[7px] sm:p-[8px]'"
        />
      </div>
    </div>
    <div class="flex overflow-x-auto w-full sm:gap-[30px] gap-[10px]">
      <template v-for="album in albums" :key="album.id">
        <div class="flex-shrink-0">
          <AlbumCard :item="album" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Button from '@/components/common/Button.vue'
import ChevronRightIcon from '@/icons/ChevronRightIcon.vue'
import AlbumCard from '@/components/home-page/cards/AlbumCard.vue'

const props = defineProps({
  albums: {
    type: Array,
    default: []
  }
})
</script>

<style lang="scss" scoped></style>
