<template>
  <button
    v-bind:aria-label="label"
    v-bind:class="classObject"
    v-bind:label="label"
    v-on:click="clickHandler"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "oNavbarButton",
  props: {
    badge: {
      validator: function(value) {
        return ["primary", "secondary", "danger"].indexOf(value) !== -1;
      }
    },
    isA11yButton: {
      type: Boolean,
      required: false
    },
    label: {
      required: true,
      type: String
    },
    active: {
      required: false,
      type: Boolean
    },
    launchType: {
      required: false,
      validator: function(value) {
        return ["panel", "emit"].indexOf(value) !== -1;
      }
    },
    launchAction: {
      required: false,
      type: String
    }
  },
  computed: {
    classObject: function() {
      return {
        "octaveNav-button--a11yButton": this.isA11yButton,
        "octaveNav-button--active":
          (this.launchType == "panel" &&
            this.$parent.panelActive == this.launchAction) ||
          this.active == true
      };
    }
  },
  methods: {
    clickHandler: function() {
      switch (this.launchType) {
        case "panel":
          this.$parent.$emit("changePanel", this.launchAction);
          break;
        case "emit":
          this.$socket.client.emit(
            "update_canvas",
            JSON.stringify({ version: "4.0.0-rc.1", objects: [] })
          );
          this.$socket.client.emit(
            "clear_canvas",
            JSON.stringify({ version: "4.0.0-rc.1", objects: [] })
          );
          break;
      }
    }
  }
};
</script>

<style scoped>
button {
  height: 100%;
  width: max-content;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: inherit;
  border: none;
  position: relative;
  outline: none;
  color: var(--text-color);
}
.dark button:before {
  --buttonbackground-color: rgb(var(--panel-color), 0.3);
  --buttonbackground-color-pressed: rgb(var(--panel-color));
}
button:before {
  content: " ";
  width: 100%;
  height: 100%;
  background-color: var(--buttonbackground-color, #f6f6f6);
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: -1;
  transform: scale(0.7);
  opacity: 0;
  transition: 0.2s ease-out;
}
button:hover:before,
button:focus-visible:before {
  transform: scale(0.9);
  opacity: 1;
  transition: 0.07s ease-out;
}
button:focus-visible:before {
  background-color: var(--buttonbackground-color-pressed, #e5e5e5);
}

button:active:before,
button.octaveNav-button--active:before {
  transform: scale(1);
  opacity: 1;
  background-color: var(--buttonbackground-color-pressed, #e5e5e5);
  transition: 0.03s ease-out;
}
button:active:focus-visible:before,
button.octaveNav-button--active:active:focus-visible:before {
  background-color: var(--buttonbackground-color-pressed, #d5d5d5);
}
button.octaveNav-button--a11yButton:not(:focus),
button.octaveNav-button--a11yButton:not(:focus-visible),
html:not([data-js-focus-visible]) button.octaveNav-button--a11yButton {
  opacity: 0;
  width: 0px;
  padding: 0px;
}
</style>
