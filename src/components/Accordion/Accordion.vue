<template>
  <div class="accordion">
    <div
      class="accordion__item"
      :class="{ active: idx === activeItem }"
      v-for="(item, idx) in accordionItems"
      :key="item.title"
    >
      <div @click="switchItem(idx)" class="accordion__header">
        <h3 class="accordion__item__title">
          {{ item.title }}
        </h3>
        <span class="accordion__item__icon">
          <img src="/icons/chevron-blue-down.svg" alt="icon" />
        </span>
      </div>

      <Transition
        name="expand"
        @enter="enter"
        @leave="leave"
        @after-enter="afterEnter"
      >
        <div class="accordion__children" v-if="idx === activeItem">
          <div
            class="accordion__child"
            v-for="(el, index) in item.children"
            :key="el.title"
          >
            <div
              @click="activeChild = index"
              class="accordion__child__header"
              :class="{ active: activeChild === index }"
            >
              <h3 class="accordion__child__title">
                {{ el.title }}
              </h3>
              <span class="accordion__child__icon">
                <img src="/icons/chevron_down.svg" alt="icon" />
              </span>
            </div>

            <Transition
              name="expand"
              @enter="enter"
              @leave="leave"
              @after-enter="afterEnter"
            >
              <div v-if="activeChild === index" class="accordion__child__body">
                {{ el.content }}
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeItem = ref<number | null>(null);
const activeChild = ref<number | null>(null);

const accordionItems = [
  {
    title: "FAQ: Registration and Login",
    children: [
      {
        title: "Is it necessary to register on Rektut?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title:
          "I did not receive a letter confirming the account registration in my mail. What should I do?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "Why doesn't my password work?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "What if I forgot my email or password?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
    ],
  },
  {
    title: "FAQ: Submitting an Ad",
    children: [
      {
        title: "Is it necessary to register on Rektut?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title:
          "I did not receive a letter confirming the account registration in my mail. What should I do?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "Why doesn't my password work?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "What if I forgot my email or password?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
    ],
  },
  {
    title: 'FAQ: "Employers" Section',
    children: [
      {
        title: "Is it necessary to register on Rektut?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title:
          "I did not receive a letter confirming the account registration in my mail. What should I do?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "Why doesn't my password work?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "What if I forgot my email or password?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
    ],
  },
  {
    title: 'FAQ: section "Housing"',
    children: [
      {
        title: "Is it necessary to register on Rektut?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title:
          "I did not receive a letter confirming the account registration in my mail. What should I do?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "Why doesn't my password work?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "What if I forgot my email or password?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
    ],
  },
  {
    title: 'FAQ: Section "Catalog of Services and Businesses"',
    children: [
      {
        title: "Is it necessary to register on Rektut?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title:
          "I did not receive a letter confirming the account registration in my mail. What should I do?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "Why doesn't my password work?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "What if I forgot my email or password?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
    ],
  },
  {
    title: "FAQ: Mobile Application",
    children: [
      {
        title: "Is it necessary to register on Rektut?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title:
          "I did not receive a letter confirming the account registration in my mail. What should I do?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "Why doesn't my password work?",
        content:
          "You don't have to register on BAZAR.club, but it will make it much easier to find work, employees, housing, specialists or clients. We strongly recommend that you create a personal account, because after that you will be able to: Post, edit and archive ads. The 'archive' function allows you to remove ads from the site, but leave them in your personal account. If necessary, you can restore it. Receive applications from employers, employees and clients. Advertise your ads. Track competitors. You can create a personal account by following this link.",
      },
      {
        title: "What if I forgot my email or password?",
        content: "",
      },
    ],
  },
  {
    title: "FAQ: Registration and Login",
    children: [
      {
        title: "Is it necessary to register on Rektut?",
        content: "",
      },
      {
        title:
          "I did not receive a letter confirming the account registration in my mail. What should I do?",
        content: "",
      },
      {
        title: "Why doesn't my password work?",
        content: "",
      },
      {
        title: "What if I forgot my email or password?",
        content: "",
      },
    ],
  },
];

const switchItem = (val: number) => {
  activeItem.value = val;
  activeChild.value = null;
};

const enter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
  const height = getComputedStyle(el).height;
  el.style.height = "0";
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = height;
  });
};

const afterEnter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
};

const leave = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = getComputedStyle(el).height;
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = "0";
  });
};
</script>

<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    transition: 0.3s;
    gap: 20px;
    justify-content: space-between;
    padding: 15px 25px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid var(--brand-color);
  }

  &__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    // gap: 10px;

    &.active {
      .accordion__header {
        background: var(--brand-color);
        margin-bottom: 10px;
      }
      .accordion__item__title {
        color: var(--primary-color);
      }

      .accordion__item__icon {
        filter: var(--primary-filter);

        img {
          transform: rotate(180deg);
        }
      }
    }

    &__title {
      color: var(--brand-color);
      font-weight: 700;
      font-size: 18px;
      transition: 0.3s;

      @media (max-width: 768px) {
        max-width: 80%;
      }
    }

    &__icon {
      user-select: none;
      height: 20px;
      transition: 0.3s;
      width: 20px;

      img {
        user-select: none;
        width: 100%;
        transition: 0.3s;
        object-fit: cover;
      }
    }
  }

  &__children {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__child {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px 25px;
    border: 1px solid var(--brand-color);
    transition: 0.3s;

    &__header {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.active {
        margin-bottom: 10px;

        .accordion__child__icon {
          img {
            transform: rotate(180deg);
          }
        }
      }
    }

    &__title {
      color: var(--additional-color);
      font-weight: 700;
      font-size: 18px;
      transition: 0.3s;

      @media (max-width: 768px) {
        max-width: 80%;
      }
    }

    &__icon {
      user-select: none;
      height: 16px;
      transition: 0.3s;
      width: 16px;

      img {
        user-select: none;
        width: 100%;
        transition: 0.3s;
        object-fit: cover;
      }
    }
  }
}
</style>
