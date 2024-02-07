<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd">
      <div class="container-fluid">
        <!-- Replacing router-link with a regular link or span -->
        <a href="#" class="nav-item navbar-brand nav-link" aria-current="page">
          The Restoration
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="nav navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!-- Replacing router-link with a regular link or span -->
              <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <!-- Replacing router-link with a regular link or span -->
              <a href="#" class="nav-link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="main-content">
      <h1>Welcome to The Restoration</h1>
      <p>
        The Restoration of the Gospel of Jesus Christ is a pivotal event in LDS doctrine,
        marking the beginning of a new era of spiritual guidance and church establishment
        by Joseph Smith, following heavenly visions and revelations.
      </p>

    <!-- Main Content (Vue Router View) -->
    <HomePage />

    <!-- Footer Section -->
    <footer class="text-center">
      <div class="github">
        <h2>Github</h2>
        <nav class="footer_nav">
          <ul class="semantic_list">
            <li>
              <a href="https://github.com/Jacoba1100254352/therestauration.jacobdanderson.net" target="_blank">
                <!-- Updated to reference the public folder directly -->
                <img id="githubIcon" src="/Images/github-dark.09072337.svg" alt="github Icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="partner">
        <h2>University Association</h2>
        <nav class="footer_nav">
          <ul class="semantic_list">
            <li>
              <a href="https://www.byu.edu" target="_blank">Brigham Young University</a>
            </li>
          </ul>
        </nav>
      </div>

      <p v-if="error" class="error">{{ error }}</p>
    </footer>
      </div>
  </div>
</template>

<script>
import HomePage from "@/views/HomePage.vue";

export default {
  name: "App",
  components: {HomePage},
  data() {
    return {
      error: "", // Placeholder for potential error messages
    };
  },
  // Additional component logic can be added here
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
  background-color: #ffffff;
}

.navbar {
  font-family: Verdana, Arial, sans-serif;
  padding: 10px;
  background-color: #e3f2fd;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}

footer {
  color: grey;
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

footer h2 {
  text-transform: uppercase;
  font-size: 1.5em;
}

footer a {
  text-decoration: none;
  color: inherit;
}

#githubIcon {
  width: 50px;
}

@media (max-width: 960px) {
  footer {
    flex-direction: column;
  }

  #githubIcon {
    width: 30px;
  }
}
</style>
