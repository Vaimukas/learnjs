<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let message = ref('Hello Vue!');
let isDanger = ref(false);
let newItem = ref('Piim');
let i = 0;
let items = ref([
    {id: i++, name: 'Viin', isDone: false},
    {id: i++, name: 'Ween', isDone: false},
    {id: i++, name: 'Siim', isDone: false},
    {id: i++, name: 'Liim', isDone: false},
]);

function add(){
    if(newItem.value.trim() !== ''){
         items.value.push({id: i++, name: newItem.value, isDone: false});
    }
    newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let todoItems = computed(() => items.value.filter(item => !item.isDone));

</script>

<template>
    <div class="container mt-3">
        <div class="content">
    <button class="button is-primary" @click="message = 'vajutatud'" > vajuta </button>
    <h1>{{ message }}</h1>
    <button class="button" :class="{'is-danger': isDanger, 'is-warning': !isDanger}" 
    @click= "isDanger = !isDanger">vajuta seda ka</button>


    <div class="field has-addons mt-3">
  <div class="control is-expanded">
    <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="kirjuta siia">
  </div>
  <div class="control">
    <button class="button is-info" @click="add">
      nüüd vajuta seda
    </button>
</div>
  </div>
  <h2> {{ newItem.split('').reverse().join('') }}</h2>
  
<ItemList :items="items" title="All Items"></ItemList>
<ItemList :items="todoItems" title="To Do Items"></ItemList>
<ItemList :items="doneItems" title="Done Items"></ItemList>

</div>
    </div>
</template>