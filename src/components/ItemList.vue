<script setup>
defineProps(['items', 'title']);
</script>

<template>
      <h1>{{ title }}</h1>
  <li v-for="item in items" :key="item.id">
    {{ item.name }} 
    <input type="checkbox" v-model="item.isDone">
  </li>

</template>