<template>
  <div>
    <BaseModal :show="showModal" @close="showModal = false">
      <div class="education-modal">
        <img :src="education.diploma.imgSrc" :alt="education.diploma.imgAlt" />
      </div>
    </BaseModal>
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
  width: 100%;
  height: 100%;

  img {
    max-width: 100%;
    max-height: 90%;
    object-fit: contain;
  }
}
</style>
