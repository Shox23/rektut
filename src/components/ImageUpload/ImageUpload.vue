<template>
  <div class="img-upload">
    <div class="img-upload__field">
      <img
        :src="`${selectedImage ? selectedImage : '/icons/gallery-add.svg'}`"
        alt="image"
        class="img-upload__img"
        :class="{ selected_image: selectedImage }"
      />
      <input class="img-upload__input" ref="imgInput" type="file" />
    </div>
    <p class="img-upload__notification">
      {{ $t("profilePage.imageReqs") }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// import { HTMLInputEvent } from "../../models/models";

const imgInput = ref<HTMLInputElement | null>(null);
const selectedImage = ref<string>("");

// const previewImage = (event: HTMLInputEvent) => {
//   const chosenImage = event.target;
//   if (chosenImage && chosenImage.files) {
//     fileView(chosenImage.files[0]);
//   }
// };

// const fileView = (blob: Blob) => {
//   if (blob.type.includes("images") || blob.type.includes("image")) {
//     let reader = new FileReader();
//     reader.onloadend = function () {
//       if (reader.result) {
//         console.log(reader.result);
//         // props.controller.blob = reader.result.toString();
//         // props.controller.publickPath = null;
//       }
//     };
//     console.log(blob);
//     selectedImage.value = blob;
//     reader.readAsDataURL(blob);
//   }
// };
</script>

<style lang="scss" scoped>
.img-upload {
  padding: 10px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%230863E7FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  &__img {
    height: 112px;
    width: 112px;
    object-fit: cover;

    @media (max-width: 375px) {
      width: 96px;
      height: 96px;
    }

    &.selected_image {
      width: 100%;
      height: 100%;
      // max-width: 300px;
      // max-height: 300px;
      object-fit: cover;
    }
  }

  &__notification {
    text-align: center;
    font-size: 16px;
    color: #18181b;
    line-height: 167%;

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  &__field {
    user-select: none;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ddd;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      width: 230px;
      height: 230px;
    }

    @media (max-width: 375px) {
      width: 200px;
      height: 200px;
    }
  }

  &__input {
    user-select: none;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }

  // &__img {
  //   width: 300px;
  //   height: 200px;
  // }
}
</style>
