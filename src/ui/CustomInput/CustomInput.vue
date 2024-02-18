<template>
  <div
    class="custom-input"
    :class="[{ none_shadow: noneShadow }, { bordered: bordered }]"
  >
    <span class="custom-input__icon" v-if="icon">
      <img :src="`/icons/${icon}`" alt="icon" />
    </span>
    <input
      class="custom-input__field"
      :placeholder="placeholder"
      :readonly="readonly"
      v-model="modelValue"
      :type="type"
      :inputmode="inputmode"
      :maxlength="maxlength"
      :autofocus="autofocus"
    />
    <span class="custom-input__trailing" v-if="trailing">
      <img v-if="trailing" :src="`/icons/${trailing}`" alt="icon" />
    </span>
    <span
      @click="$emit('onIconClick')"
      class="custom-input__switcher"
      v-if="modeSwitcher"
    >
      <img
        :src="`${
          type === 'password' ? '/icons/eye.svg' : '/icons/eye-closed.svg'
        }`"
        alt="icon"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import { CustomInputEmits, CustomInputProps } from "./interfaces";

defineProps<CustomInputProps>();
const emits = defineEmits<CustomInputEmits>();
const modelValue = defineModel();
</script>

<style scoped lang="scss">
@import "../../assets/styles/mixins/grid.scss";

.custom-input {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  background: #fff;
  @include adaptivPaddinglg(25, 25, 25, 25, 20, 20, 16, 16);
  border-radius: 10px;

  &.none_shadow {
    box-shadow: none;
  }

  &.bordered {
    box-shadow: none;
    border: 1px solid var(--brand-color);
  }

  &__field {
    background: inherit;
    font-family: var(--primary-font);
    width: 100%;
    height: 100%;
    border: none;
    font-weight: 500;
    @include adaptiv-fontlg(24, 18);
    line-height: 62%;
    outline: none;
    color: var(--additional-color);

    &::placeholder {
      color: var(--blurred-color);
    }

    @media (max-width: 768px) {
      @include adaptiv-fontmd(24, 18);
    }
  }

  &__icon {
    overflow: visible;
    width: 16px;
    height: 18px;

    img {
      object-fit: cover;
    }
  }

  &__trailing {
    overflow: visible;
    width: 16px;
    height: 16px;

    img {
      object-fit: cover;
    }
  }

  &__switcher {
    cursor: pointer;
    width: 16px;
    height: 16px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    @include adaptivPaddingmd(20, 20, 25, 25, 20, 20, 16, 16);
  }
}
</style>
