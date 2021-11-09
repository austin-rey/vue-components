<template>
  <div class="event-list-container">
    <ul>
      <li v-for="event in events" :key="event.id">
        <span>{{ event.id }}</span> - <span>{{ event.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EventsList',
  inheritAttrs: false,
  props: ['events'],
};
</script>

<style scoped>
.event-list-container {
  background-color: #efefef;
  padding: 10px;
  border-radius: 5px;
}

ul {
  padding-left: 0px;
  margin: 0px;
  list-style-type: none;
}

li {
  display: flex;
  padding-bottom: 5px;
  column-gap: 10px;
}
</style>
