<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd">
      <div class="container-fluid">
        <router-link class="nav-item navbar-brand nav-link" to="/" aria-current="page">
          Operation Opportunity
        </router-link>
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
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content (Vue Router View) -->
    <router-view />

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
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      error: "", // Placeholder for potential error messages
    };
  },
  // Additional component logic can be added here
};
</script>

<style scoped>
/* Global resets and default styles */
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
  background-color: #ffffff;
}

/* Navigation styling */
.navbar {
  font-family: Verdana, Arial, sans-serif;
}

/* Footer styling */
footer {
  color: grey;
  background-color: #f7f7f7;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

footer h2 {
  text-transform: uppercase;
}

footer a {
  text-decoration: none;
  color: inherit;
}

/* GitHub icon specific styling */
#githubIcon {
  width: 50px; /* Adjusted for a better size */
}

/* Media queries for responsive adjustments */
@media (max-width: 960px) {
  footer {
    flex-direction: column;
  }

  #githubIcon {
    width: 30px; /* Smaller size on narrower screens */
  }
}
</style>
