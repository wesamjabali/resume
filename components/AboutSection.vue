<template>
  <BaseSection :title="aboutTitle">
    <p>{{ aboutInfo }}</p>
  </BaseSection>
</template>

<script setup lang="ts">
import { useAboutInfo } from "@/composables/useAboutInfo";
const { title: aboutTitle, description: aboutInfo } = useAboutInfo();
</script>
