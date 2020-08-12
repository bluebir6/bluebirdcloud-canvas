<template>
  <main class="pk pk-cont" v-on:click.prevent>
    <component v-bind:is="currentToolbarSection"></component>
  </main>
</template>

<script>
import PencilKitMainBar from "./sections/MainBar";
export default {
  name: "PencilKit",
  components: {
    PencilKitMainBar
  },
  data: function() {
    return {
      currentToolbarSection: PencilKitMainBar
    };
  }
};
</script>

<style scoped>
main.pk.pk-cont {
  height: 100px;
  min-width: 230px;
  box-shadow: 0px 2px 20px 0px rgb(214 214 214 / 53%);
  border-radius: 50px;
  background-color: rgba(var(--panel-color), 0.6);
  backdrop-filter: blur(20px);
  overflow: hidden;
  touch-action: manipulation;
}

@media only screen and (min-width: 600px) {
  main.pk.pk-cont {
    opacity: 0.5;
    transition: opacity 2.5s cubic-bezier(0.4, 0, 1, 1),
      box-shadow 2.5s cubic-bezier(0.4, 0, 1, 1),
      background-color 2.5s cubic-bezier(0.4, 0, 1, 1);
    background-color: rgba(var(--panel-color), 0);
    padding: 0px 25px;
  }
  main.pk.pk-cont:hover {
    box-shadow: 0px 2px 20px 0px rgb(167 167 167 / 53%);
    opacity: 1;
    transition: 0.2s ease-out;
    background-color: rgba(var(--panel-color), 0.6);
    backdrop-filter: blur(20px);
  }
}

@media only screen and (max-width: 600px) {
  main.pk.pk-cont {
    width: 100vw;
    border-radius: 10px 10px 0px 0px;
  }
}

.dark main.pk.pk-cont {
  box-shadow: none;
}
</style>
