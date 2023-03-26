<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal" @click.self="emit('close')">
      <div class="modal__inner">
        <div class="modal__top">
          <button
            class="modal__top--button modal__top--button-close"
            @click="emit('close')"
          >
            <span>x</span>
          </button>
        </div>
        <div class="modal__content">
          <span class="modal__content-inner">
            <slot />
          </span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.show,
  (shown) => {
    shown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
);
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  z-index: 100;

  &-enter-active,
  &-leave-active {
    transition: all 0.2s ease-in-out;

    .modal__inner {
      transition: inherit;
    }
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;

    .modal__inner {
      transform: translateY(100vh);
    }

    @include above-mobile {
      .modal__inner {
        transform: unset;
      }
    }
  }

  @include above-mobile {
    justify-content: center;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color-secondary);

    &-inner {
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow: 0 0.5rem 0 0.5rem var(--background-color-secondary);
      width: 95vw;
      max-height: 85vh;
      @include above-mobile {
        max-width: 70vw;
        max-height: 70vh;
      }
    }
  }

  &__top {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    background-color: var(--background-color-secondary);
    border-width: 0 0.5rem 0 0.5rem;
    border-style: solid;
    border-color: transparent;
    border-radius: 0.5rem 0.5rem 0 0;

    & > :last-child {
      border-radius: 0 0.5rem 0 0;
    }

    & > * {
      margin-right: -0.5rem;
    }

    &--button {
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      padding: 1rem 2rem;

      @include above-mobile {
        padding: 0.25rem 1.5rem;
      }

      &:hover {
        text-decoration: none;
      }

      &::after {
        content: "";
      }

      &-close {
        &:hover {
          background-color: red;
        }
      }
    }
  }
}
</style>
