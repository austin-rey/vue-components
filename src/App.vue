<template>
  <h1>Disaster Tracker</h1>
  <EventsMap />
  <EventsCategoryInput :categories="categoriesList" />
  <EventsList :events="eventsList" />
</template>

<script>
import EventsList from './components/EventsList.vue';
import EventsCategoryInput from './components/EventsCategoryInput.vue';
import EventsMap from './components/EventsMap.vue';

import useFetcher from './api/useFetcher.js';
import axios from 'axios';
import { onMounted } from 'vue';

async function getEvents(params) {
  const data = await axios.get(
    'https://eonet.sci.gsfc.nasa.gov/api/v3/events',
    { params }
  );
  console.log(data.data.events);
  return data.data.events;
}

async function getCategories(params) {
  const data = await axios.get(
    'https://eonet.sci.gsfc.nasa.gov/api/v3/categories',
    { params }
  );
  console.log(data.data.categories);
  return data.data.categories;
}

export default {
  name: 'App',
  components: {
    EventsList,
    EventsCategoryInput,
    EventsMap,
  },
  setup() {
    const {
      data: eventsList,
      loading: eventsLoading,
      error: eventsError,
      getData: eventsFetch,
    } = useFetcher(getEvents);

    const {
      data: categoriesList,
      loading: categoriesLoading,
      error: categoriesError,
      getData: categoriesFetch,
    } = useFetcher(getCategories);

    onMounted(eventsFetch);
    onMounted(categoriesFetch);

    return { eventsList, categoriesList };
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
