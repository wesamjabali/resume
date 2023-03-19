<template>
  <BaseSection :title="title" class="work-experience-section">
    <div class="work-experience-section--job" v-for="job of jobs">
      <div class="work-experience-section--job-dates">
        {{ job.startDate }} - {{ job.endDate }}
      </div>
      <div class="work-experience-section--job-info">
        <span class="work-experience-section--job-info__company">
          <a :href="job.companyUrl">{{ job.header }}</a>
        </span>
        <span class="work-experience-section--job-info__description">
          {{ job.description }}
        </span>
        <span class="work-experience-section--job-info__technologies">
          {{ job.technologies }}
        </span>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { useWorkExperience } from "@/composables/useWorkExperience";
const { title, jobs } = useWorkExperience();
</script>

<style lang="scss">
.work-experience-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  &--job {
    display: flex;
    flex-direction: row;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &-dates {
      width: 30%;
      color: var(--text-color-darker);
    }

    &-info {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__company {
        color: var(--text-color);
      }

      &__description {
        color: var(--text-color-dark);
      }

      &__technologies {
        color: var(--text-color-darker);
      }
    }
  }
}
</style>
