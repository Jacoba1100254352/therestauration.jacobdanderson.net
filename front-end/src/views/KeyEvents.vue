<template>
  <div>
    <h1>Restoration Events</h1>
    <EventsComponent/>
  </div>
</template>

<script>
import EventsComponent from "@/components/EventsComponent"; // Adjust the path as necessary

export default {
  components: {
    EventsComponent,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #2a6496;
  font-size: 2.5em;
}
</style>