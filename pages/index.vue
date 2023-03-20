<template>
  <div class="index-page">
    <BaseHeader />
    <div class="sections">
      <AboutSection />
      <SplitSection :title="workExperience.title" :info="workExperience.info" />
      <SplitSection :title="projects.title" :info="projects.info" />
      <SplitSection
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
