<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal" v-if="isOpen" @click="$emit('close')">
        <div class="modal__content" @click.stop>
          <div class="modal__header">
            <div class="modal__header__one" v-if="!altHeader">
              <!-- <PageTitle :title="headerTitle" /> -->
              <div class="modal__header__content">
                <h3 class="modal__title">
                  {{ headerTitle }}
                </h3>
                <button @click="$emit('close')" class="modal__close">
                  <img src="/icons/close.svg" alt="icon" />
                </button>
              </div>
              <slot name="headerItems" />
            </div>
            <div class="modal__header__two" v-else>
              <button @click="$emit('close')" class="modal__close">
                <img src="/icons/close.svg" alt="icon" />
              </button>
              <h3 class="modal__title__alt">
                {{ headerTitle }}
              </h3>
            </div>
          </div>

          <h3 class="modal__title" v-if="altBodyTitle">
            {{ bodyTitle }}
          </h3>

          <h3 class="global-title" v-else>
            {{ bodyTitle }}
          </h3>

          <div class="modal__body">
            <div>
              <slot name="body" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ModalEmits, ModalProps } from "./interfaces";

defineProps<ModalProps>();
defineEmits<ModalEmits>();
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins/grid.scss";

.modal {
  z-index: 30;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);

  &__content {
    padding: 25px 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: var(--primary-color);

    @media (max-width: 768px) {
      @include adaptivGapmd(30, 20);
      @include adaptivPaddingmd(20, 20, 40, 40, 10, 10, 20, 20);
    }
  }

  &__header {
    &__one {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      @media (max-width: 768px) {
        @include adaptivGapmd(20, 10);
      }
    }

    &__content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: var(--additional-color);
    line-height: 62%;

    @media (max-width: 768px) {
      @include adaptiv-fontmd(24, 18);
    }
  }

  &__close {
    background: none;
    border: none;
    outline: none;
    height: 20px;
    cursor: pointer;
    width: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
