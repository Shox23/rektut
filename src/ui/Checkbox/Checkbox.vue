<template>
  <label class="checkbox">
    <button
      :disabled="disabled"
      type="button"
      v-ripple:#407abe33
      @click="checked"
      class="checkbox__btn"
    >
      <input
        :disabled="disabled"
        :checked="check"
        type="checkbox"
        class="checkbox__input"
      />
      <span :class="{ check }" class="checkbox__icon"></span>
    </button>
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { CheckboxProps, CheckboxEmits } from "./interfaces";

const emits = defineEmits<CheckboxEmits>();
const props = defineProps<CheckboxProps>();

const check = ref<boolean>(props.check);

const checked = () => {
  check.value = !check.value;
  emits("check", check.value);
};

watch(props, (value) => {
  check.value = value.check;
});
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  user-select: none;

  &__btn {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms;
  }
  &__input {
    position: absolute;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  &__icon {
    border: 2px solid var(--brand-color);
    border-radius: 5px;
    width: 18px;
    height: 18px;
    transition: 200ms;
    display: flex;
    align-items: center;
    background: var(--primary-color);

    &::before {
      content: "";
      background: url("/icons/check.svg") no-repeat center;
      color: transparent;
      width: 0;
      overflow: hidden;
      transition: 200ms;
      transition-delay: 200ms;
    }

    &.check {
      &::before {
        width: 15px;
        aspect-ratio: 1;
      }
    }
  }
}
</style>
