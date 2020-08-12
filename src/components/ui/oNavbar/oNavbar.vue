<template>
  <nav>
    <section class="left" :touchscreen="isTouchScreen">
      <section class="a11yButtons">
        <oNavbarButton label="Skip to main content" isA11yButton>
          Skip to main content
        </oNavbarButton>
        <oNavbarButton label="Accessibility Help" isA11yButton>
          Accessibility Help
        </oNavbarButton>
      </section>
      <slot name="left" />
    </section>
    <section class="right">
      <slot name="right" />
    </section>
    <oNavbarPanel
      v-bind:panelActive="panelActive"
      v-bind:panelName="panelName"
    />
  </nav>
</template>

<script>
import oNavbarButton from "./components/oNavbarButton.vue";
import oNavbarPanel from "./components/oNavbarPanel.vue";
export const oNavbar = {
  name: "oNavbar",
  components: {
    oNavbarButton,
    oNavbarPanel
  },
  props: {
    modifiers: {
      type: String,
      required: false,
      validator: function(value) {
        return ["disabled", "loading"].indexOf(value) !== -1;
      }
    },
    theme: {
      type: String,
      required: false,
      validator: function(value) {
        return ["white", "light", "dark", "black"].indexOf(value) !== -1;
      }
    },
    position: {
      type: String,
      required: false,
      validator: function(value) {
        return ["fixed", "sticky", "absolute"].indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      required: false,
      validator: function(value) {
        return ["raised", "lowered", "small"].indexOf(value) !== -1;
      }
    }
  },
  data: function() {
    return {
      panelActive: false,
      panelName: null,
      isTouchScreen: false
    };
  },
  mounted: function() {
    this.$on("changePanel", function(panelName) {
      if (this.panelActive == true && panelName == this.panelName) {
        this.panelActive = false;
        this.panelName = null;
      } else if (this.panelActive == true && panelName != this.panelName) {
        this.panelActive = true;
        this.panelName = panelName;
      } else if (this.panelActive == false && panelName != this.panelName) {
        this.panelActive = true;
        this.panelName = panelName;
      }
    });
    //touchscreen detection thanks to https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
      const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ("orientation" in window) {
        hasTouchScreen = true;
      } else {
        const UA = navigator.userAgent;
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }
    if (hasTouchScreen) {
      this.isTouchScreen = true;
    }
  }
};

// Proxy export all related components.
export { default as oNavbarTitle } from "./components/oNavbarTitle.vue";
export { default as oNavbarButton } from "./components/oNavbarButton.vue";
export default oNavbar;
</script>

<style scoped>
nav {
  position: fixed;
  top: 0px;
  height: 4rem;
  width: 100vw;
  background-color: rgba(var(--panel-color), 0.6);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  touch-action: manipulation;
}

section {
  width: max-content;
  display: flex;
  height: 100%;
}
section.left {
  margin-left: 0px;
  margin-right: auto;
}
section.right {
  margin-left: auto;
  margin-right: 0px;
}
.left[touchscreen="true"] section.a11yButtons {
  display: none;
}
.left,
.right {
  z-index: 19999999;
}
</style>
