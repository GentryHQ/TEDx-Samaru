<template>
 <div>
  <label :for="name">{{ label }}</label>
  <input
   class="text-input"
   :type="type"
   :name="name"
   :id="name"
   :placeholder="placeholder"
   v-model="inputValue"
  />
 </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
 name: {
  type: String,
  required: true
 },
 label: {
  type: String,
  default: ''
 },
 type: {
  type: String,
  default: 'text'
 },
 placeholder: {
  type: String,
  default: ''
 },
 modelValue: {
  type: String,
  default: ''
 }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue)

watch(inputValue, (newValue) => {
 emit('update:modelValue', newValue)
})
</script>

<style scoped>
label {
 display: block;
 margin-bottom: 0.5rem;
}
.text-input {
 padding: 1rem;
 border-radius: 0.5rem;
 width: 100%;
 border: 1px solid #ccc;
}
</style>
