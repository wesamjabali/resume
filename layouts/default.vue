<template>
  <div class="default-layout">
    <a v-if="isTemplate" href="https://wesamjabali.com" class="author-banner"
      >Made by wesam</a
    >
    <router-view />
  </div>
</template>

<script setup lang="ts">
const isTemplate = !useAboutInfo().description.includes("Wesam");
</script>

<style lang="scss">
.default-layout {
  display: flex;
  background-color: var(--background-color);
  flex-direction: column;
  max-width: 32rem;
  margin: auto;
  padding: 2rem 1rem 3rem 1rem;

  @media print {
    max-width: 80%;
    padding: 0;
  }
}

.author-banner {
  position: fixed;
  justify-content: center;
  right: 1rem;
  bottom: 1rem;
  align-items: center;
  font-size: 0.6rem;
  color: var(--text-color-darker);
  padding: 0.25rem;
  background-color: #000;
  border: 1px solid var(--text-color-darker);
  border-radius: 3px;
}
</style>
