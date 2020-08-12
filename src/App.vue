<template>
  <main id="app" class="body light">
    <router-view />
  </main>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
html {
  --heading-font-family: "Source Sans Pro", sans-serif;
  --body-font-family: "Source Sans Pro", sans-serif;
  --body-fontcolor--transition: color 0.2s ease-out;
  --body-background-color--transition: background-color 0.1s ease-out;
}

@supports (font-variation-settings: normal) {
  html {
    --heading-font-family: "Source Sans Pro", sans-serif;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .signInWrapper {
    --body-padding: 1rem;
  }
}

body,
main.body {
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%)) 100vh;
  height: -webkit-fill-available; /* Fix mobile safari bug */
  position: fixed;
  overflow: hidden;
  margin: 0px;
  background-color: var(--background-color);
  transition: var(--body-background-color--transition),
    var(--body-fontcolor--transition);
  color: var(--text-color);
}
main.body {
  animation: fadeIn 0.2s ease-out;
}

main.body.light {
  --background-color: #ffffff;
  --panel-color: 255, 255, 255;
  --text-color: #191919;
}

main.body.dark {
  --background-color: #000000;
  --panel-color: 55, 55, 55;
  --text-color: #ffffff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
iframe {
  display: none;
}

* {
  -webkit-tap-highlight-color: transparent; /* for removing the highlight */
}
</style>
