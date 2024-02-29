<template>
  <div class="home">
    <section class="intro">
      <h1>Welcome to the Digital Restoration Journey</h1>
      <p>
        Explore the pivotal events of the Restoration of the Gospel through an interactive digital experience. Delve
        into key events, figures, and the profound spiritual journey that marks the beginning of a new era of guidance.
      </p>
    </section>

    <nav class="featured-links">
      <router-link to="/map">Interactive Map</router-link>
      |
      <router-link to="/events">Key Events</router-link>
      |
      <router-link to="/figures">Key Figures</router-link>
    </nav>

    <section class="testimony">
      <h2>Our Testimony</h2>
      <p>
        "We testify of the Restoration of the Gospel in these latter days and invite you to explore its history and
        teachings through this platform."
      </p>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomePage",
};
</script>

<style scoped>
.intro h1 {
  text-align: center;
  color: #2a6496;
  font-size: 2.5em;
}

.intro, .testimony {
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;
}

.featured-links {
  text-align: center;
  margin: 20px 0;
}

.featured-links a {
  padding: 10px;
  background-color: #e0e0e0;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
}

.testimony h2 {
  font-size: 1.5em;
}

.restoration-intro h1 {
  color: #2a6496;
  font-size: 2em;
}

.key-events h2 {
  font-size: 1.5em;
}

.key-events ul {
  list-style-type: none;
  padding: 0;
}

.key-events li:before {
  content: '✓';
  margin-right: 8px;
  color: green;
}

.testimony {
  background-color: #d0d0d0;
  padding: 20px;
}

.testimony h2 {
  font-size: 1.5em;
}
</style>