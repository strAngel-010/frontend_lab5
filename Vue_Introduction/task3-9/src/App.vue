<script setup>
import Clicker from './components/Clicker.vue';

const handleClick = (clickerNumber) => {
  alert(`Clicker ${clickerNumber} clicked!`)
}
</script>

<template>
  <main>
    <div class="grid">
      <Clicker 
        v-for="n in 100"
        :key="n" 
        :amount="n" 
        :index="n"
        @button-clicked="handleClick">
        <button>Default button</button>
      </Clicker>
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>