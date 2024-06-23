<template>
 <div v-if="isVisible" class="modal-overlay" @click="closeModal">
  <div class="modal-content" @click.stop>
   <button class="close-button" @click="closeModal">✖</button>
   <slot></slot>
   <div class="modal-actions">
    <slot name="actions"></slot>
   </div>
  </div>
 </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue'

const props = defineProps({
 show: Boolean
})
const emit = defineEmits(['update:show'])

const isVisible = ref(props.show)

function closeModal() {
 isVisible.value = false
 emit('update:show', false)
}

watch(
 () => props.show,
 (newVal) => {
  isVisible.value = newVal
 }
)
</script>

<style lang="scss" scoped>
.modal-overlay {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
}

.modal-content {
 background: #fff;
 padding: 20px;
 border-radius: 8px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 position: relative;
 width: 90%;
 max-width: 500px;
}

.close-button {
 position: absolute;
 top: 10px;
 right: 10px;
 background: none;
 border: none;
 font-size: 20px;
 cursor: pointer;
}
.modal-actions {
 margin-top: 20px;
 display: flex;
 justify-content: flex-end;
 gap: 10px;
}
</style>
