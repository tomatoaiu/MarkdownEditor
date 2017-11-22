<template>
    <div id="app">
        <header-component></header-component>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
    name: 'markdowneditor',
    components :{
        'header-component' : Header
    }
}
</script>

<style>
/* CSS */
</style>
