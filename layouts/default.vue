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
  max-width: 32rem;
  margin: auto;
  padding: 3rem 1rem 0 1rem;
}
</style>
