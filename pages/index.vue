<template>
  <div class="index-page">
    <BaseHeader />
    <div class="sections">
      <AboutSection />
      <WorkExperienceSection />
      <LinksSection />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
