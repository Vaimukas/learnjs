<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
let activeTab= ref(0);
let titles= ref(['Pictures', 'Music', 'Videos', 'Documents'])
let contents = ref([
  'wonderful Pictures',
  'wonderful Music',
  'wonderful Videos',
  'wonderful Documents'
])

function setTab(index){
  activeTab.value = index;
}
</script>

<template>
<Tabs :active="activeTab" :titles="titles" @change="setTab"> </Tabs>
<div class="container content">
  <h1>{{ contents[activeTab] }}</h1>
</div>

</template>