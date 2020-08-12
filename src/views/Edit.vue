<template>
  <main class="cvs cvs-editor">
    <oNavbar>
      <template v-slot:left>
        <oNavbarButton label="Menu">
          <picture class="cvs cvs-titlebar--logo">
            <source
              :srcset="
                require('@/assets/Resources/Branding/Export/SVG/BluebirdCloud Canvas Icon - Dark.svg')
              "
              media="(prefers-color-scheme: dark)"
            />
            <img
              :src="
                require('@/assets/Resources/Branding/Export/SVG/BluebirdCloud Canvas Icon - Light.svg')
              "
            />
          </picture>
        </oNavbarButton>
        <oNavbarTitle productName="Canvas" productSection="BluebirdCloud" />
      </template>
      <template v-slot:right>
        <oNavbarButton label="Clear Canvas" launchType="emit">
          Clear
        </oNavbarButton>
        <oNavbarButton label="Users Connected">
          {{ currentUsers }} users connected
        </oNavbarButton>
      </template>
    </oNavbar>
    <section class="cvs cvs-canvas">
      <canvas ref="canvasElOrigin"></canvas>
    </section>
    <section class="cvs cvs-controls">
      <PencilKit />
    </section>
  </main>
</template>

<script>
import {
  oNavbar,
  oNavbarTitle,
  oNavbarButton
} from "@/components/ui/oNavbar/oNavbar.vue";

import PencilKit from "@/components/canvas/elements/PencilKit/PencilKit.vue";

import Canvas from "@/helpers/Canvas/Canvas.ts";
export default {
  name: "CVSPEdit",
  components: {
    PencilKit,
    oNavbar,
    oNavbarTitle,
    oNavbarButton
  },
  mounted() {
    new Canvas(this.$refs.canvasElOrigin);
  },
  computed: {
    currentUsers() {
      return this.$root.currentUsers;
    }
  }
};
</script>

<style scoped>
main.cvs.cvs-editor,
.cvs.cvs-canvas {
  position: fixed;
  width: 100%;
  height: 100%;
}

section.cvs.cvs-controls {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
}

@media only screen and (max-width: 600px) {
  section.cvs.cvs-controls {
    bottom: 0;
    z-index: 10000;
  }
}
picture.cvs.cvs-titlebar--logo {
  width: 2rem;
}
</style>
