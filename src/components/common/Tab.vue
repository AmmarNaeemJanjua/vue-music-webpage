<template>
  <div class="sm:inline-flex flex rounded border border-primary overflow-hidden">
    <!-- Buy Tab -->
    <button
      :class="[
        isActive === 'buy' ? 'bg-primary text-white' : 'bg-white text-black',
        'sm:py-[7px] sm:min-w-[84px] sm:font-medium sm:text-[13px] sm:leading-[15.51px] py-[6px] font-medium text-[11px] leading-[13.43px] w-full'
      ]"
      @click="isActive = 'buy'"
    >
      Buy
    </button>

    <!-- Stream Tab -->
    <button
      :class="[
        isActive === 'stream' ? 'bg-blue-500 text-white' : 'bg-white text-black',
        'sm:py-[7px] sm:min-w-[84px] sm:font-medium sm:text-[13px] sm:leading-[15.51px] py-[6px] font-medium text-[11px] leading-[13.43px] w-full'
      ]"
      @click="isActive = 'stream'"
    >
      Stream
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 'buy'
    }
  }
}
</script>
