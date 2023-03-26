<template>
  <div class="index-page" ref="index">
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

const index = ref<HTMLElement | null>(null);
const leftMargin = ref("0");

const resizeMap = () => {
  const newValue = `-${
    (window.innerWidth - (index.value?.offsetWidth ?? 0)) / 2
  }px`;

  leftMargin.value = newValue;
};

/* Resize debouncing logic */
const resizeDebounceDelayMs = 100;
let resizeTimeout = setTimeout(() => {}, 0);

const debouncedOnResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    resizeMap();
  }, resizeDebounceDelayMs);
};

onMounted(() => {
  resizeMap();
  window.addEventListener("resize", debouncedOnResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", debouncedOnResize);
});
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

    .map-container {
      position: relative;
      left: v-bind(leftMargin);
      width: 100vw;
    }
  }
}
</style>
