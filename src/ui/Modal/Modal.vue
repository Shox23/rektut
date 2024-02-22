<template>
  <Teleport to="body">
    <Transition>
      <div class="modal" v-if="isOpen">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__header__one" v-if="!altHeader">
              <PageTitle :title="headerTitle" />
              <span class="modal__close">
                <img src="/icons/close-circle.svg" alt="icon" />
              </span>
            </div>
            <div class="modal__header__two" v-else>
              <PageTitle :title="headerTitle" />
            </div>
          </div>
          <PageTitle :title="bodyTitle" />
          <div class="modal__body">
            <div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import PageTitle from "../PageTitle/PageTitle.vue";
import { ModalProps } from "./interfaces";

defineProps<ModalProps>();
</script>

<style lang="scss" scoped>
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
    background: var(--primary-color);
  }

  &__header__one {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__close {
    width: 21px;
    height: 21px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
