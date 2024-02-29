<template>
  <div>
    <h2>Key Events</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.name }} - {{ event.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: "EventsComponent",
  setup() {
    const store = useStore();
    const events = computed(() => store.getters.events);

    return {
      events
    };
  }
};
</script>

<style scoped>
h2 {
  text-align: left;
  padding-left: 30px;
  font-size: 2.5em;
}
</style>