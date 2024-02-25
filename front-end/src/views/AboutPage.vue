<template>
  <section class="restoration-intro">
    <h1>The Restoration of the Gospel</h1>
    <p>
      The Restoration of the Gospel of Jesus Christ is a pivotal event in LDS doctrine,
      marking the beginning of a new era of spiritual guidance and church establishment
      by Joseph Smith, following heavenly visions and revelations.
    </p>
  </section>

  <section class="key-events">
    <h2>Key Events of the Restoration</h2>
    <ul>
      <li>The First Vision</li>
      <li>Translation of the Book of Mormon</li>
      <li>Restoration of the Priesthood</li>
      <li>Organization of the Church</li>
      <!-- Add more list items as needed -->
    </ul>
  </section>

  <section class="testimony">
    <h2>Personal Testimony</h2>
    <p>
      Sharing a personal testimony or an inspiring quote about the Restoration can be
      powerful. For example, "I testify that the Restoration of the Gospel was a divine
      act of love by our Heavenly Father, meant to guide us in these latter days..."
    </p>
  </section>

  <!-- Add more sections as needed -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "AboutPage",
})
export default class AboutPage extends Vue {
  // If you have data, computed properties, methods, etc., they can be added here.
  // For example, a simple data property would look like this:
  data() {
    return {
      // your data properties here
    };
  }

  // Example of a lifecycle hook
  created() {
    // your created hook logic here
  }
}
</script>

<style scoped>
.restoration-intro h1 {
  color: #2a6496;
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

/* Add more styling as needed */
</style>
