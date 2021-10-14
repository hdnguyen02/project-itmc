<template>
  <div id="Home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <header-custom />
    <content-custom />
    <footer-custom />
  </div>
</template>

<script>
import headerCustom from "../components/header/Header.vue";
import FooterCustom from "../components/footer/FooterCustom.vue";
import contentCustom from "../components/content/Content.vue";


export default {
  components: {
    headerCustom,
    FooterCustom,
    contentCustom,
  },
};
</script>

<style>
</style>