<script setup>
import { computed, ref } from 'vue';

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

  <h1>All items</h1>
  <li v-for="item in items">{{ item.name }} 
    <input type="checkbox" v-model="item.isDone">
  </li>

  <h1>Done items</h1>
  <li v-for="item in doneItems">{{ item.name }} 
    <input type="checkbox" v-model="item.isDone">
  </li>

</div>
    </div>
</template>