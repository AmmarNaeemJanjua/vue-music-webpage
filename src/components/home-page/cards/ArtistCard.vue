<template>
  <div
    class="sm:max-w-[170px] max-w-[135px] rounded bg-white text-center border border-[#E6EAF0] sm:py-[20px] py-[15px]"
  >
    <div class="relative">
      <img
        class="object-cover sm:w-[130px] w-[105px] sm:h-[130px] h-[105px] rounded-full mx-auto"
        :src="item?.image"
        :alt="`${item?.name}`"
      />
      <BlueCheckIcon
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
      />
    </div>
    <div class="sm:mt-[0.875rem] mt-[12px]">
      <h2
        class="sm:text-[16px] text-[14px] font-bold sm:leading-[19.54px] leading-[17.09px] sm:pb-[0.1875rem] pb-[1px]"
      >
        {{ item?.name }}
      </h2>
      <p class="text-[#47505B] sm:text-[12px] text-[10px] leading-[16px]">{{ item?.tagline }}</p>
    </div>
    <div>
      <RatingCard class="my-[0.625rem]" :rating="item.rating" />

      <Button
        :icon="FollowIcon"
        :additionalClasses="'sm:gap-[9px] gap-[6px] border-[1.3px] border-primary sm:text-[13px] text-[11px] text-primary sm:leading-[15.87px] leading-[13.43px] font-bold py-[7px] sm:ps-[12px] ps-[8px] pe-[6px]'"
        :text="`Follow ${item?.followers}`"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Button from '@/components/common/Button.vue'
import FollowIcon from '@/icons/FollowIcon.vue'
import BlueCheckIcon from '@/icons/BlueCheckIcon.vue'
import RatingCard from '@/components/home-page/cards/common/RatingCard.vue'

const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>
