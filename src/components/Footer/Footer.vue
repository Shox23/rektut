<template>
  <footer class="footer">
    <ul class="footer__list">
      <li>
        <img
          src="/icons/navigation/logo_sub.svg"
          alt="icon"
          loading="lazy"
          class="footer__logo"
        />
        <p class="footer__text">
          {{ $t("footer.mainText") }}
        </p>
      </li>
      <li v-for="item in footerContent" :key="item.title">
        <div>
          <h3>
            {{ $t(`${item.title}`) }}
          </h3>
          <ul>
            <li v-for="el in item.links">
              <router-link v-if="el.link" :to="el.link">
                {{ $t(`${el.title}`) }}
              </router-link>
              <p v-else>
                {{ el.title }}
              </p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
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
</script>

<style lang="scss" scoped>
.footer {
  // background: #e6e6e6;
}
</style>
