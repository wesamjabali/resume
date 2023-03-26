<template>
  <div class="header">
    <img
      class="header__avatar"
      ref="avatar"
      height="98"
      :src="imgSrc"
      :alt="imgAlt"
      @mouseenter="floatAvatar"
      @click="floatAvatar"
    />
    <div class="header__content">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__tagline">{{ tagline }}</p>
      <a class="header__url" :href="urlHref">{{ urlDisplay }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, tagline, urlHref, urlDisplay, imgSrc, imgAlt } = useHeaderInfo();

const avatar = ref<HTMLElement | null>(null);
const allowFloat = ref(false);
const leftOffset = ref(0);
let avatarFloatMs = 1000;

const resetAvatar = () => {
  if (!avatar.value) return;
  avatarFloatMs = 1000;
  avatar.value.style.transition = `all ${avatarFloatMs}ms ease`;
  avatar.value.style.transform = "unset";
};

let resetAvatarTimer = setTimeout(resetAvatar, 1500);

const floatAvatar = () => {
  if (!avatar.value || !allowFloat.value) return;
  clearTimeout(resetAvatarTimer);
  const x =
    Math.random() *
      (window.innerWidth - leftOffset.value - 98 + leftOffset.value) -
    leftOffset.value -
    10;
  const y = Math.random() * (window.innerHeight - 196 - 98) + 98;
  avatar.value.style.transform = `translate(${x}px, ${y}px)`;
  avatar.value.style.transition = `all ${(avatarFloatMs /= 1.1)}ms ease`;
  resetAvatarTimer = setTimeout(resetAvatar, 1500);
};

const onResize = () => {
  if (!avatar.value) return;
  let offset = 0;
  let element = avatar.value;
  while (element) {
    offset += element.offsetLeft;
    element = element.offsetParent as HTMLElement;
  }
  leftOffset.value = offset;
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
  if (!avatar.value) return;

  const avatarBreatheMs = 900;

  avatar.value.style.animation = `breathe ${avatarBreatheMs}ms ease`;
  setTimeout(() => {
    allowFloat.value = true;
  }, avatarBreatheMs + 1);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<style lang="scss">
@keyframes breathe {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__avatar {
    position: relative;
    transition: all 1s ease;
    border-radius: 50%;
    width: 98px;
    height: 98px;

    &:hover {
      cursor: pointer;
    }

    @media print {
      display: none;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.25rem;
    margin-left: 1rem;
    @media print {
      align-items: center;
      font-size: 2rem !important;
      margin-bottom: 1rem;
      margin-left: 0;
      width: 100%;
    }
  }

  &__title {
    line-height: 1.6rem;
    font-size: 1.25rem;
    @media print {
      font-size: 2rem !important;
      margin-bottom: 1rem;
    }
  }

  &__tagline {
    font-size: 0.9rem;
    color: var(--text-color-dark);
  }

  &__url {
    font-size: 0.9rem;
    color: var(--text-color-darker);
    &::after {
      content: "";
    }
  }
}
</style>
