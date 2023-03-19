<template>
  <div class="section">
    <h2 class="section__title">{{ props.title }}</h2>
    <span class="section__content">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__title {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  &__content {
    width: 100%;
    color: var(--text-color-dark);
  }
}
</style>
