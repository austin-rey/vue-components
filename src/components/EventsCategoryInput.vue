<template>
  <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="category in categories" :key="category.id">
        {{ category.title }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: 'EventsCategoryInput',
  inheritAttrs: false,
  props: ['categories'],
  data() {
    return {
      selected: '',
    };
  },
};
</script>

<style></style>
