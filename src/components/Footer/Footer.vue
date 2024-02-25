<template>
  <footer class="footer">
    <div class="footer__container container">
      <ul class="footer__list">
        <li class="footer__item__main">
          <img
            src="/icons/navigation/logo_sub.svg"
            alt="icon"
            loading="lazy"
            class="footer__logo"
          />
          <p class="footer__item__link">
            {{ $t("footer.mainText") }}
          </p>
        </li>
        <li
          class="footer__item"
          v-for="item in footerContent"
          :key="item.title"
        >
          <div>
            <h3 class="footer__title">
              {{ $t(`${item.title}`) }}
            </h3>
            <ul>
              <li v-for="el in item.links">
                <router-link
                  class="footer__item__link"
                  v-if="el.link"
                  :to="el.link"
                >
                  {{ $t(`${el.title}`) }}
                </router-link>
                <p class="footer__item__link" v-else>
                  {{ el.title }}
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <div class="footer__socials">
        <h3 class="footer__title">
          {{ $t("footer.requisites") }}
        </h3>
        <ul class="footer__socials__list">
          <li v-for="item in footerSocialLinks" :key="item.icon">
            <a class="footer__socials__link" :href="item.link">
              <span class="footer__socials__icon">
                <img :src="`/icons/${item.icon}`" alt="icon" />
              </span>
              <span class="footer__item__link">
                {{ item.title }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const footerContent = {
  information: {
    title: "footer.information",
    links: [
      {
        link: "/",
        title: "footer.aboutUs",
      },
      {
        link: "/",
        title: "footer.submit",
      },
      {
        link: "/",
        title: "footer.faq",
      },
      {
        link: "/",
        title: "footer.reviews",
      },
      {
        link: "/",
        title: "footer.team",
      },
    ],
  },
  catalogue: {
    title: "footer.catalogueTitle",
    links: [
      {
        link: "/",
        title: "footer.work",
      },
      {
        link: "/",
        title: "footer.housing",
      },
      {
        link: "/",
        title: "footer.catalogue",
      },
      {
        link: "/",
        title: "footer.events",
      },
      {
        link: "/",
        title: "footer.health",
      },
    ],
  },
  contacts: {
    title: "footer.contacts",
    links: [
      {
        title: "+999 999999999",
      },
      {
        title: "Info@rektut.tu",
      },
      {
        title: "footer.catalogue",
      },
      {
        title: "City",
      },
      {
        link: "/",
        title: "footer.contact",
      },
    ],
  },
};

const footerSocialLinks = [
  {
    title: "info@rektut.tu",
    icon: "send.svg",
    link: "",
  },
  {
    title: "@rektut.tu",
    icon: "facebook.svg",
    link: "",
  },
  {
    title: "@rektut.tu",
    icon: "whatsapp.svg",
    link: "",
  },
  {
    title: "@rektut.tu",
    icon: "paypal.svg",
    link: "",
  },
];
</script>

<style lang="scss" scoped>
.footer {
  padding: 25px 0 10px;
  @media (max-width: 768px) {
    background: #e6e6e6;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 15px;
    @media (max-width: 1200px) {
      max-width: 1000px;
    }

    @media (max-width: 1024px) {
      max-width: 768px;
    }

    @media (max-width: 768px) {
      max-width: 576px;
    }

    @media (max-width: 576px) {
      max-width: 425px;
    }

    @media (max-width: 475px) {
      padding: 0 20px;
    }
  }

  &__logo {
    width: 230px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 576px) {
      flex-wrap: wrap;
      gap: 20px;
    }
    // display: grid;
    // grid-template-columns: repeat(4, 1fr);
  }

  &__item {
    &__main {
      max-width: 30%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (max-width: 768px) {
        display: none;
      }
    }

    &__link {
      font-weight: 400;
      font-size: 16px;
      line-height: 167%;
      color: #18181b;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  &__socials {
    &__list {
      display: flex;
      gap: 20px;
      align-items: center;

      @media (max-width: 576px) {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__icon {
      width: 24px;
      height: 24px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
    color: #18181b;

    @media (max-width: 768px) {
      color: var(--brand-color);
    }
  }
}
</style>
