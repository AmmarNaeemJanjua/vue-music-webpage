<template>
  <div class="bg-white rounded border border-[#E6EAF0] flex items-center justify-between">
    <div class="flex items-center">
      <img
        class="object-cover sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] rounded-s"
        :src="item?.image"
        :alt="item?.trackName"
      />
      <div
        class="sm:leading-[20px] leading-[10.74px] sm:font-semibold font-normal sm:ps-[20px] ps-[10px]"
      >
        <p class="text-[#8B949F] sm:text-[12px] text-[9px]">{{ item?.artistName }}</p>
        <p class="text-[#071526] sm:text-[13px] text-[10px]">{{ item?.trackName }}</p>
      </div>
    </div>

    <div class="flex items-center sm:pe-[10px] pe-[4px]">
      <p
        class="sm:text-[11px] text-[9px] font-semibold text-[#071526] sm:leading-[20px] leading-[10.99px] sm:pe-[5px] pe-[10px]"
      >
        Sold for
      </p>
      <CostCard
        :cost="item?.price"
        :additionalClasses="'bg-[#416CFF1A] sm:leading-[13.43px] leading-[10.99px] sm:text-[11px] text-[9px] sm:px-[10px] px-[6px] sm:pt-[5px] pt-[3px] sm:pb-[3px] pb-[4px]'"
      />
      <Button
        :icon="VerticalThreeDotsIcon"
        :additionalClasses="'sm:mx-[14px] mx-[10px] sm:my-[7px] my-[3px]'"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CostCard from '@/components/home-page/cards/common/CostCard.vue'
import Button from '@/components/common/Button.vue'
import VerticalThreeDotsIcon from '@/icons/VerticalThreeDotsIcon.vue'

const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped></style>
