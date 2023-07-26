<template>
  <BaseModal
    :show="showModal"
    :title="education.diploma.imgAlt"
    @close="showModal = false"
  >
    <template #content>
      <div class="education-modal">
        <img :src="education.diploma.imgSrc" :alt="education.diploma.imgAlt" />
      </div>
    </template>
  </BaseModal>
  <div>
    <BaseSplitSection
      :title="education.title"
      :info="education.info"
      @headerClick="showModal = true"
    />
  </div>
</template>

<script setup lang="ts">
const education = useEducationInfo();
const showModal = ref(false);
</script>

<style lang="scss">
.education-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
</style>
