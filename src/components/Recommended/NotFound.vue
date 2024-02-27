<template>
  <div class="not-found">
    <div class="not-found__img">
      <img src="/icons/note-remove.svg" alt="not-found" />
    </div>

    <div>
      <h3 class="not-found__title global-title">
        {{ title }}
      </h3>
      <p class="not-found__text">{{ text }}</p>
    </div>

    <FilledButton :not-found-block="true">
      <template #text>
        {{ btnText }}
      </template>
    </FilledButton>
  </div>
</template>

<script lang="ts" setup>
import FilledButton from "../../ui/FilledButton/FilledButton.vue";
import { NotFoundProps } from "../../models/models";

defineProps<NotFoundProps>();
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 60px 0;
  border-radius: 10px;
  background: #f2f1f0;

  &__img {
    @media (max-width: 576px) {
      width: 150px;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__text {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    color: var(--additional-color);
  }
}
</style>
