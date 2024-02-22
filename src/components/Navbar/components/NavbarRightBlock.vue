<template>
  <div class="right-block">
    <div class="right-block__address">
      <img
        class="right-block__address__icon"
        src="/icons/location.svg"
        alt="icon"
      />
      <p>
        {{ $t("navbar.address") }}
      </p>
    </div>

    <button class="right-block__btn">En</button>

    <router-link
      class="right-block__favourites"
      to="/profile"
      v-if="adaptiveStore.screenState === AdaptiveState.mobile"
    >
      <img src="/icons/navigation/nav_heart.svg" alt="icon" />
    </router-link>

    <router-link class="right-block__profile" to="/profile">
      <img src="/icons/navigation/nav_user.svg" alt="icon" />
    </router-link>
    <Modal
      :is-open="modalOpen"
      :header-title="$t('languageSettings.mainTitle')"
      :body-title="$t('languageSettings.secondTitle')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AdaptiveState from "../../../helpers/enums/adaptiveEnum";
import { useAdaptiveStore } from "../../../store/adaptive";
import Modal from "../../../ui/Modal/Modal.vue";

const adaptiveStore = useAdaptiveStore();
const modalOpen = ref<boolean>(false);
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins/grid.scss";

.right-block {
  display: flex;
  align-items: center;
  @include adaptivGaplg(10, 6);

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 500px) {
    gap: 5px;
  }

  &__address {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    color: var(--additional-color);

    @media (max-width: 425px) {
      font-size: 14px;
    }

    &__icon {
      @media (max-width: 425px) {
        height: 18px;
        width: 18px;
      }
    }
  }

  &__favourites {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;

      @media (max-width: 425px) {
        width: 18px;
        height: 18px;
      }
    }

    @media (max-width: 425px) {
      width: 18px;
      height: 18px;
    }
  }

  &__profile {
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;

      @media (max-width: 425px) {
        width: 18px;
        height: 18px;
      }
    }

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }

    @media (max-width: 425px) {
      width: 18px;
      height: 18px;
    }
  }

  &__btn {
    cursor: pointer;
    background: var(--additional-color);
    color: var(--primary-color);
    padding: 8px 10px;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    outline: none;
    font-family: 600;

    @media (max-width: 768px) {
      padding: 6px;

      @media (max-width: 425px) {
        font-size: 14px;
      }
    }
  }
}
</style>
