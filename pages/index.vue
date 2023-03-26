<template>
  <div class="index-page">
    <BaseHeader />
    <div class="index-page__sections">
      <AboutSection />
      <BaseSplitSection
        :title="workExperience.title"
        :info="workExperience.info"
      />
      <EducationSection />
      <BaseSplitSection :title="projects.title" :info="projects.info" />
      <BaseMap class="index-page__map" />
      <BaseSplitSection
        class="print-hide"
        :title="links.title"
        :info="links.info"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const workExperience = useWorkExperience();
const links = useLinks();
const projects = usePersonalProjects();
</script>

<style lang="scss">
.index-page {
  padding-top: 3rem;

  &__sections {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    margin-top: 2rem;
  }

  &__map {
    height: 15rem;
    width: 100%;
  }
}
</style>
