<template>
  <div class="sm:inline-flex flex rounded border border-primary overflow-hidden">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="[
        isActive === tab.value ? 'bg-primary text-white' : 'text-dark-blue',
        'sm:py-[7px] sm:min-w-[84px] sm:font-medium sm:text-[13px] sm:leading-[15.51px] py-[6px] font-medium text-[11px] leading-[13.43px] w-full'
      ]"
      @click="selectTab(tab.value)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])

const isActive = computed(() => props.modelValue)

const selectTab = (value) => {
  emit('update:modelValue', value)
}
</script>
