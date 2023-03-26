<template>
  <BaseSection :title="props.title" class="split-section">
    <div
      :class="[
        'split-section--part',
        { 'split-section--part-with-description': part.description },
      ]"
      v-for="part of props.info"
    >
      <div class="split-section--part-left">
        {{ part.left }}
      </div>
      <div class="split-section--part-info">
        <span class="split-section--part-info__header">
          <component
            :is="part.headerUrl ? 'a' : 'button'"
            :href="part.headerUrl"
            @click="part.headerUrl ? null : emit('headerClick')"
            target="_blank"
            >{{ part.header }}</component
          >
        </span>
        <span
          v-if="part.description"
          class="split-section--part-info__description"
        >
          {{ part.description }}
        </span>
        <span v-if="part.footer" class="split-section--part-info__footer">
          {{ part.footer }}
        </span>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
// Proptype is repeated here because of this Vue bug:
// https://github.com/vuejs/core/issues/4294
const props = defineProps<{
  title: string;
  info: {
    header: string;
    left: string;
    headerUrl?: string;
    description?: string;
    footer?: string;
  }[];
}>();

const emit = defineEmits(["headerClick"]);
</script>

<style lang="scss">
.split-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  &--part {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    &-with-description {
      &:not(:last-child) {
        margin-bottom: 1.25rem;
      }
    }

    @include above-mobile {
      flex-wrap: nowrap;
    }

    &-left {
      width: 100%;
      @include above-mobile {
        width: 30%;
      }

      color: var(--text-color-darker);
    }

    &-info {
      width: 100%;
      @include above-mobile {
        width: 70%;
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__header {
        color: var(--text-color);
      }

      &__description {
        color: var(--text-color-dark);
      }

      &__footer {
        color: var(--text-color-darker);
      }
    }
  }
}
</style>
