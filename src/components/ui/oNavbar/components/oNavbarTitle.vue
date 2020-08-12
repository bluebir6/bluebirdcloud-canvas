<template>
  <header :hideOnMobile="hideOnMobile">
    <h1>
      <span class="productSection">{{ productSection }}</span>
      &nbsp;
      <span v-bind:class="productNameStyle">{{ productName }}</span>
    </h1>
  </header>
</template>

<script>
export default {
  name: "oNavbarTitle",
  props: {
    productSection: {
      required: false,
      type: String
    },
    productName: {
      required: true,
      type: String
    },
    hideOnMobile: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  computed: {
    productNameStyle: function() {
      return {
        pnAltStyle: !this.productSection,
        productName: true
      };
    }
  }
};
</script>

<style scoped>
header {
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  color: var(--text-color);
  padding-left: 20px;
  font-family: var(--body-font-family);
  -webkit-touch-callout: none;
  user-select: none;
}
@media only screen and (max-width: 600px) {
  header[hideOnMobile="true"] {
    display: none;
  }
}
</style>
