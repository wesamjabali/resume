<template>
  <div class="default-layout">
    <router-view />
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;
  background-color: var(--background-color);
  flex-direction: column;
  max-width: 30rem;
  margin: auto;
  padding: 2rem 1rem 2rem 1rem;
}
</style>
