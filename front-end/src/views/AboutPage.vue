<template>
  <div class="about">
    <section class="project-background">
      <h1>About the Digital Restoration Journey</h1>
      <p>
        This project was conceived as a bridge between technology and faith, aiming to make the rich history of the
        Restoration accessible to all through interactive media.
      </p>
    </section>

    <section class="motivation">
      <h2>Motivation Behind the Project</h2>
      <p>
        Our love for programming and storytelling drives this project. We believe in the power of interactive learning
        to bring historical events to life and inspire faith in individuals around the globe.
      </p>
    </section>

    <section class="how-it-works">
      <h2>How to Explore the Digital Restoration</h2>
      <p>
        Navigate through the Interactive Map to discover key events and figures. Each point on the map is a gateway to a
        story, enriched with texts, images, and videos.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about h1, .about h2 {
  text-align: center;
  color: #2a6496;
}

.project-background, .motivation, .how-it-works {
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;
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

.testimony h2 {
  font-size: 1.5em;
}
</style>
