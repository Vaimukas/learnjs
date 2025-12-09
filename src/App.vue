<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

import ToDo from './pages/ToDo.vue'
import Modals from './pages/Modals.vue'


let activeTab= ref(0);
let titles= ref(['ToDo', 'Modals'])
let contents = ref([
  ToDo,
  Modals
])

function setTab(index){
  activeTab.value = index;
}
</script>

<template>
<Tabs :active="activeTab" :titles="titles" @change="setTab"> </Tabs>
<component :is="contents[activeTab]"> </component>

</template>