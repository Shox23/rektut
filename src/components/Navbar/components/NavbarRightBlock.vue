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

    <button class="right-block__btn" @click="modalOpen = true">En</button>

    <router-link
      class="right-block__favourites"
      to="/favorites"
      v-if="adaptiveStore.screenState === AdaptiveState.mobile"
    >
      <img src="/icons/navigation/nav_heart.svg" alt="icon" />
    </router-link>

    <router-link class="right-block__profile" to="/profile">
      <img src="/icons/navigation/nav_user.svg" alt="icon" />
    </router-link>
    <Modal
      @close="modalOpen = false"
      :is-open="modalOpen"
      :alt-body-title="true"
      :header-title="$t('languageSettings.mainTitle')"
      :body-title="$t('languageSettings.secondTitle')"
    >
      <template #headerItems>
        <ul class="right-block__languages">
          <li
            class="right-block__language"
            v-for="item in currentLanguages"
            :class="{ active: activeLang === item.key }"
            :key="item.key"
          >
            {{ item.title }}
          </li>
        </ul>
      </template>
      <template #body>
        <div class="right-block__modal">
          <ul class="right-block__cities">
            <li
              class="right-block__city"
              :class="{ active: locationStore.currentCity === item.name }"
              v-for="item in locationStore.allCities"
              :key="item.id"
            >
              {{ item.name }}
            </li>
          </ul>
          <div class="right-block__modal__btn">
            <FilledButton>
              <template #text>
                {{ $t("languageSettings.btnText") }}
              </template>
            </FilledButton>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AdaptiveState from "../../../helpers/enums/adaptiveEnum";
import { useAdaptiveStore } from "../../../store/adaptive";
import Modal from "../../../ui/Modal/Modal.vue";
import FilledButton from "../../../ui/FilledButton/FilledButton.vue";
import { useLocationStore } from "../../../store/location";

const adaptiveStore = useAdaptiveStore();
const modalOpen = ref<boolean>(false);
const activeLang = ref<string>("en");
const locationStore = useLocationStore();

const currentLanguages = [
  {
    key: "pol",
    title: "Polish",
  },
  {
    key: "en",
    title: "English",
  },
  {
    key: "tur",
    title: "Turkish",
  },
  {
    key: "ru",
    title: "Russian",
  },
];

const setCurrentLocation = () => {
  locationStore.getCities();
  locationStore.getCountries();
};

onMounted(() => {
  setCurrentLocation();
});
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

  &__cities {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 25px 30px;
    padding: 0 0 20px;

    @media (max-width: 640px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 375px) {
      gap: 10px;
    }
  }

  &__city {
    color: var(--additional-color);
    font-size: 24px;
    cursor: pointer;

    @media (max-width: 768px) {
      @include adaptiv-fontmd(24, 14);
    }

    &.active {
      font-weight: 700;
      color: var(--brand-color);
    }
  }

  &__modal {
    &__btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }

  &__languages {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 768px) {
      gap: 10px;
    }

    @media (max-width: 335px) {
      gap: 5px;
    }
  }

  &__language {
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    color: var(--brand-color);
    border: 1px solid var(--brand-color);
    transition: 0.3s;

    @media (max-width: 768px) {
      @include adaptivPaddingmd(10, 10, 20, 20, 8, 8, 8, 8);
      @include adaptiv-fontmd(20, 14);
    }

    &.active {
      color: var(--primary-color);
      background: var(--brand-color);
    }
  }
}
</style>
