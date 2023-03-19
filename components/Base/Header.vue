<template>
  <div class="header">
    <img class="header__avatar" height="98" :src="imgSrc" :alt="imgAlt" />
    <div class="header__content">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__tagline">{{ tagline }}</p>
      <a class="header__url" :href="urlHref">{{ urlDisplay }}</a>
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
    @media print {
      display: none;
    }

    &:hover {
      scale: 1.1;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1rem;
    @media print {
      align-items: center;
      font-size: 2rem !important;
      margin-bottom: 1rem;
      width: 100%;
    }
  }

  &__title {
    line-height: 1.5rem;
    font-size: 1.25rem;
    @media print {
      font-size: 2rem !important;
      margin-bottom: 1rem;
    }
  }

  &__tagline {
    font-size: 0.9rem;
    color: var(--text-color-dark);
  }

  &__url {
    font-size: 0.9rem;
    color: var(--text-color-darker);
  }
}
</style>
