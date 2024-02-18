<template>
  <div class="ad-block">
    <div class="ad-block__img"></div>
    <h2 class="ad-block__title">
      {{ $t("main.advertisementTitleFirstPart") }}
      <span>
        {{ $t("main.advertisementTitleSecondPart") }}
      </span>
    </h2>

    <FilledButton icon="plus-white.svg">
      <template #text>
        {{ $t("main.advertisementBtnTitle") }}
      </template>
    </FilledButton>
  </div>
</template>

<script lang="ts" setup>
import FilledButton from "../../../../ui/FilledButton/FilledButton.vue";
</script>

<style scoped lang="scss">
.ad-block {
  height: 255px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  overflow: hidden;
  border-radius: 10px;

  &::after {
    position: absolute;
    right: 0;
    left: 0;
    z-index: -1;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    content: "";
  }

  &__title {
    text-align: center;
    max-width: 400px;
    font-weight: 700;
    font-size: 32px;
    line-height: 95%;
    color: var(--primary-color);

    span {
      color: #b8ea71;
    }
  }

  &__img {
    z-index: -1;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    background: url("/images/advertisement.jpg") no-repeat;
    background-position: 25% 75%;
    background-size: cover;
  }
}
</style>
