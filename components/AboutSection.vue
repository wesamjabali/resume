<template>
  <BaseSection :title="aboutTitle">
    <span v-html="aboutInfo" />
  </BaseSection>
</template>

<script setup lang="ts">
import { useAboutInfo } from "@/composables/useAboutInfo";
const { title: aboutTitle, description: aboutInfo } = useAboutInfo();
</script>
