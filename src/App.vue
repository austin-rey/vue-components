<template>
  <h1>Disaster Tracker</h1>
  <EventsMap />
  <EventsCategoryList />
  <EventsList :events="events" />
</template>

<script>
import EventsList from './components/EventsList.vue';
import EventsCategoryList from './components/EventsCategoryList.vue';
import EventsMap from './components/EventsMap.vue';

import useFetcher from './api/useFetcher.js';
import axios from 'axios';
import { onMounted } from 'vue';

async function getEvents(params) {
  const data = await axios.get(
    'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=20',
    { params }
  );
  return data.data.events;
}

export default {
  name: 'App',
  components: {
    EventsList,
    EventsCategoryList,
  },
  props: {
    events: Object,
    categories: Object,
  },
  setup() {
    const { data, loading, error, getData } = useFetcher(getEvents);

    onMounted(getData);

    return { data, loading, error, getData };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
