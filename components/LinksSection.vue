<template>
  <BaseSection :title="title" class="links-section">
    <div class="links-section--link" v-for="link of links">
      <div class="links-section--link-name">{{ link.name }}</div>
      <a :href="link.href" class="links-section--link-url">
        {{ link.urlDisplay }}
      </a>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
const { title, links } = useLinks();
</script>

<style lang="scss">
.links-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  &--link {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.25rem;
    &-name {
      width: 30%;
      color: var(--text-color-darker);
    }
    &-url {
      width: 70%;
      color: var(--text-color);
    }
  }
}
</style>
