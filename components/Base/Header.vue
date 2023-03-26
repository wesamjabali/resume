<template>
  <div class="header">
    <div class="header__avatar">
      {{ clickCount }}
      <img
        height="98"
        :src="imgSrc"
        :alt="imgAlt"
        ref="avatar"
        @click.self="floatAvatar"
        @dragenter="floatAvatar"
      />
    </div>
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
const leftOffset = ref(0);
let avatarFloatMs = 1200;
const clickCount = ref(0);

const resetAvatar = () => {
  if (!avatar.value) return;
  clickCount.value = 0;
  avatarFloatMs = 1200;
  avatar.value.style.transition = `all ${avatarFloatMs}ms ease`;
  avatar.value.style.transform = "unset";
  avatar.value.style.animation = "unset";
};

let resetAvatarTimer = setTimeout(resetAvatar, 1600);

const floatAvatar = async () => {
  if (!avatar.value) return;
  avatar.value.style.animation = `rainbow 1s infinite`;
  clearTimeout(resetAvatarTimer);

  const y = Math.random() * (window.innerHeight - 196 - 98) + 98;
  const x =
    Math.random() *
      (window.innerWidth - leftOffset.value - 98 + leftOffset.value) -
    leftOffset.value -
    20;

  avatar.value.style.transform = `translate(${x}px, ${y}px)`;
  avatar.value.style.transitionDuration = `${Math.max(
    (avatarFloatMs /= 1.1),
    60
  )}ms`;

  if (clickCount.value > 30) {
    avatar.value.style.transform += ` scale(${
      Math.random() * 0.5 + (1 - Math.min(clickCount.value, 80) / 100)
    })`;
  }

  clickCount.value++;
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
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<style lang="scss">
@keyframes jump {
  25%,
  75% {
    transform: translateY(-0.4rem);
  }
  0%,
  50%,
  100% {
    transform: translateY(0);
  }
}

@keyframes rainbow {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__avatar {
    position: relative;
    transition: all 1s ease-out;
    animation: jump 600ms linear;
    animation-delay: 200ms;
    width: 98px;
    height: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
    }

    @media print {
      display: none;
    }

    img {
      position: absolute;
      border-radius: 100%;
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
