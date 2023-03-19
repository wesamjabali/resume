<template>
  <div class="index-page">
    <BaseHeader />
    <div class="sections">
      <AboutSection />
      <SplitSection :info="workExperience.info" :title="workExperience.title" />
      <SplitSection :title="projects.title" :info="projects.info" />
      <SplitSection :title="links.title" :info="links.info" />
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
