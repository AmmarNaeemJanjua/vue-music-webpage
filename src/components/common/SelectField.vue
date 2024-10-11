<template>
  <div
    ref="dropdown"
    class="relative w-full sm:w-[170px] cursor-pointer select-none"
    @click="toggleDropdown"
  >
    <div
      class="text-[13px] font-bold bg-white border leading-[15.87px] text-primary py-[7px] ps-[20px] pe-[12px] border-primary rounded-[4px] h-[30px] flex justify-between items-center"
    >
      <div>
        {{ selectedOption ? selectedOption : placeholder }}
      </div>
      <ChevronDownIcon />
    </div>
    <ul
      v-if="isOpen"
      class="absolute left-0 w-full mt-[10px] py-[10px] bg-white rounded-[4px] max-h-[12.6rem] overflow-y-auto scrollbar-hide z-10 drop-shadow-md"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        :class="[
          'text-[12px] leading-[14.65px] py-[8px] ps-[20px] pe-[12px] cursor-pointer hover:bg-[#416dff0b] font-medium h-[30px] flex justify-between items-center',
          option.value === selectedValue ? 'bg-[#416CFF1A] text-primary' : ''
        ]"
      >
        <div>
          {{ option.label }}
        </div>

        <CheckIcon v-show="option.value === selectedValue" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ChevronDownIcon from '@/icons/ChevronDownIcon.vue'
import CheckIcon from '@/icons/CheckIcon.vue'

const props = defineProps({
  options: {
    type: Array,
    default: []
  },
  modelValue: {
    type: [String, Number, Object],
    default: null
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  }
})
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const dropdown = ref(null)
const selectedValue = ref(props.modelValue)

const selectedOption = computed(() => {
  return props.options.find((option) => option.value === selectedValue.value)?.label
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  selectedValue.value = option.value
  isOpen.value = false
  // Emit the value to the parent component
  emit('update:modelValue', selectedValue.value)
}

const closeDropdown = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropdown)
})
</script>

<style scoped></style>
