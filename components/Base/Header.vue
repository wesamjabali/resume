<template>
  <div class="header">
    <img class="header__avatar" height="70" :src="imgSrc" :alt="imgAlt" />
    <div class="header__content">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__tagline">{{ tagline }}</p>
      <a class="header__tagline" :href="urlHref">{{ urlDisplay }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, tagline, urlHref, urlDisplay, imgSrc, imgAlt } = useHeaderInfo();
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__avatar {
    border-radius: 50%;
    margin-right: 1rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1rem;
  }

  &__title {
    line-height: 1.5rem;
    font-size: 1.2rem;
  }

  &__tagline {
    color: var(--text-color-dark);
  }
}
</style>