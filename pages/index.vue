<template>
  <div class="index-page">
    <BaseHeader />
    <div class="sections">
      <AboutSection />
      <BaseSplitSection
        :title="workExperience.title"
        :info="workExperience.info"
      />
      <BaseSplitSection :title="projects.title" :info="projects.info" />
      <EducationSection />
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
}

.sections {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 2rem;
}
</style>
