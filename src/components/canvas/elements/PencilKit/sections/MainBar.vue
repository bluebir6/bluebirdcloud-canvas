<template>
  <section class="pk pk-section">
    <section class="pk pk-tools">
      <figure
        v-for="tool in currentTools"
        v-bind:key="tool.uuid"
        v-on:click="changeActiveTool(tool.uuid)"
        v-bind:isActive="tool.active"
        v-bind:itemType="tool.toolType"
      >
        <img v-bind:src="tool.toolGraphic.light" />
        <img v-bind:src="tool.toolGraphic.dark" />
      </figure>
    </section>
    <section class="pk pk-pickers">
      <figure class="pk pk-colorWheel">
        <div></div>
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "PencilKitMainBar",
  computed: {
    currentTools() {
      return this.$store.state.CanvasStateCanvasToolPickerState.currentTools;
    }
  },
  methods: {
    changeActiveTool(uuid) {
      this.$store.direct.commit.CanvasStateCanvasToolPickerState.ChangeCurrentActiveTool(
        uuid
      );
    }
  }
};
</script>

<style>
section.pk.pk-section {
  display: flex;
  height: 100%;
}
section.pk.pk-tools {
  display: flex;
  overflow-x: scroll;
  max-width: calc(100vw - 25px);
}
section.pk.pk-tools figure {
  width: 35px;
  margin: 25px;
}
section.pk.pk-tools figure[itemType="pen"] {
  margin-right: 5px;
}
section.pk.pk-tools figure img {
  position: absolute;
  bottom: -26px;
  transition: 0.25s cubic-bezier(0.2, -0.15, 0, 1.53);
  width: 35px;
}

.light section.pk.pk-tools figure img:nth-child(2) {
  display: none;
}
.dark section.pk.pk-tools figure img:nth-child(1) {
  display: none;
}
section.pk.pk-tools figure[isActive="true"] img {
  transform: translateY(-25px);
}
section.pk.pk-pickers figure.pk.pk-colorWheel {
  display: none;
  height: calc(100% - 50px);
  margin: 25px;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
}
section.pk.pk-pickers figure.pk.pk-colorWheel div {
  width: 30px;
  height: 30px;
  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
  border-radius: 50%;
}
section.pk.pk-pickers figure.pk.pk-colorWheel div:active,
section.pk.pk-pickers figure.pk.pk-colorWheel div:hover {
  transform: rotate(360deg);
  transition: 1s cubic-bezier(0.64, 0.17, 0.1, 1.58);
}
</style>
