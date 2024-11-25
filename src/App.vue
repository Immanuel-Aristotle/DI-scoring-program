<template>
  <div id="app">
    <div class="logo-container">
      <img :class="{ 'logo-minimized': !isHomePage }" src="./assets/DI-logo-full.svg"
        @error="$event.target.src = './assets/DI-logo-full.png'" class="logo" @click="goHome">
      <div v-if="!isHomePage" class="logo-hint">
        Click the logo to return home
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHomePage: true,
    }
  },
  watch: {
    '$route'(to) {
      // Check if we're on the home page (assuming home page path is '/')
      this.isHomePage = to.path === '/'
    }
  },
  created() {
    // Set initial state based on current route
    this.isHomePage = this.$route.path === '/'
  },
  methods: {
    goHome() {
      if (!this.isHomePage) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.logo-hint {
  font-family: Georgia, 'Times New Roman', Times, serif;
  position: fixed;
  /* top: 80px;  Adjust based on your logo size */
  left: 20px;
  font-size: 13px;
  color: #666;
  opacity: 0;
  transition: opacity 0.1s ease;
  z-index: 999;
}

.logo-container:hover .logo-hint {
  opacity: 1;
}

.logo {
  width: 300px;
  transition: all 0.3s ease;
  position: relative;
}

.logo-minimized {
  width: 150px;
  /* Smaller size when minimized */
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
}

.logo-minimized:hover {
  transform: scale(1.1);
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p.heading {
  font-size: 40px;
}

p.internal-router {
  font-size: 20px;
}
</style>
