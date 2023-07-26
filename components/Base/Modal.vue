<template>
  <dialog class="modal" ref="modal" @click="onClickOverlay">
    <div class="modal__header">
      <div class="modal__header--title">
        {{ props.title }}
      </div>
      <button class="modal__header--button modal__header--button-close" @click="emit('close')" ref="closeButton">
        <span>x</span>
      </button>
    </div>

    <div class="modal__content">
      <slot name="content" />
    </div>
  </dialog>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});

const modal = ref<HTMLDialogElement | null>(null);

watch(
  () => props.show,
  (shown) => {
    if (shown) {
      modal.value?.showModal();
    } else {
      modal.value?.close();
    }
  }
);

const onClickOverlay = (event: MouseEvent) => {
  if (event.target === modal.value) {
    emit("close");
  }
};
</script>

<style lang="scss">
.modal {
  border: none;
  padding: 0;
  border-radius: 0.5rem;
  color: var(--text-color);
  background-color: var(--background-color);
  box-sizing: border-box;

  &::backdrop {
    background-color: var(--modal-overlay-color);
    backdrop-filter: blur(2px);
  }

  &__content {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.5rem 1rem;

  }

  &__header {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 3rem;

    &--title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &--button {
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      width: 3rem;

      &:hover {
        text-decoration: none;
      }

      &::after {
        content: "";
      }

      &-close {

        &:hover,
        &:focus {
          background-color: red;
        }
      }
    }
  }
}
</style>
