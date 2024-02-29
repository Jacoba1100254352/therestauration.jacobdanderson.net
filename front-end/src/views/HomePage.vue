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
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "HomePage", // Replace with your component name
	setup() {
		const store = useStore();
	},
});
</script>

<style scoped>
.restoration-intro {
  background-color: #f0f0f0;
  padding: 20px;
}

.restoration-intro h1 {
  color: #2a6496;
  font-size: 2em;
}

.key-events {
  background-color: #e0e0e0;
  padding: 20px;
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