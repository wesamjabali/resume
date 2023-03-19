<template>
  <BaseHeader />
  <div class="sections">
    <AboutSection />
    <WorkExperienceSection />
    <LinksSection />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.sections {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 2rem;
}
</style>
