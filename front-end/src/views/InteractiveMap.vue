<template>
  <div class="interactive-map">
    <h1>Interactive Map of the Restoration</h1>
    <p>Explore key locations of the Restoration journey through our interactive map. Click on markers to learn more
      about each event and figure.</p>
    <MapComponent/>
  </div>
</template>

<script lang="ts">
// Import your MapComponent
import MapComponent from "@/components/MapComponent.vue"; // Adjust the path based on your project structure

export default {
  name: "InteractiveMap",
  components: {
    MapComponent
  }
};
</script>

<style scoped>
.interactive-map {
  text-align: center;
}

.interactive-map h1 {
  margin-bottom: 20px;
  color: #333;
}

.interactive-map p {
  margin-bottom: 20px;
  color: #555;
}
</style>
