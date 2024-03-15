<template>
  <div class="ads-btn">
    <button @click="$emit('onClick')" class="ads-btn__btn">
      <span class="ads-btn__icon">
        <img src="/icons/plus.svg" alt="icon" />
      </span>
      <span>
        {{ $t("myAds.createAnAd") }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { EmptyAdsButtonEmits } from "../../../models/models";

const emits = defineEmits<EmptyAdsButtonEmits>();
</script>

<style lang="scss" scoped>
.ads-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  overflow: hidden;
  background: rgba(8, 99, 231, 0.1);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%230863E7FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 10px;
  position: relative;

  &__btn {
    cursor: pointer;
    background: none;
    border-radius: 16px;
    position: absolute;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    font-weight: 700;
    font-size: 36px;
    color: var(--brand-color);

    @media (max-width: 576px) {
      font-size: 20px;
    }
  }

  &__icon {
    width: 32px;
    height: 32px;

    @media (max-width: 576px) {
      width: 20px;
      height: 20px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
