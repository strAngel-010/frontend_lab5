<script setup>
import { ref } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['button-clicked'])
const count = ref(0)

const onClick = (amount) => { 
    count.value += props.amount
    emit('button-clicked', props.index)
}
</script>

<template>
    <div id="app">
      <div>Clicked {{ count }} times</div>
      <div v-on:click="onClick(amount)">
        <slot />
      </div>
    </div>
</template>

<style scoped>
</style>