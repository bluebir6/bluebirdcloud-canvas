<template>
  <main v-bind:class="classObject"></main>
</template>

<script>
export default {
  name: "oNavbarpanel",
  props: {
    panelActive: Boolean,
    panelName: String
  },
  computed: {
    classObject: function() {
      return {
        "octaveNav-isOpen": this.panelActive
      };
    }
  }
};
</script>

<style scoped>
main {
  position: fixed;
  top: 4rem;
  left: 0px;
  width: 100vw;
  height: 25rem;
  background-color: #fff;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(-1rem);
  transition: 0.2s ease-in;
  pointer-events: none;
}
main.octaveNav-isOpen {
  transform: translateX(0px);
  opacity: 1;
  transition: 0.2s cubic-bezier(0, 0.75, 0, 1);
  pointer-events: none;
}
</style>
