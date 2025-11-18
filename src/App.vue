<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue!');
let isDanger = ref(false)
</script>

<template>
    <div class="content">
    <button class="button is-primary" @click="message = 'vajutatud'" > vajuta </button>
    <h1>{{ message }}</h1>
    <button class="button" v-bind:class="{'is-danger': isDanger, 'is-warning': !isDanger}" @click= "isDanger = !isDanger">vajuta seda ka</button>
    </div>
</template>