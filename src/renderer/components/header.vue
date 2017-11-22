<template lang="html">
    <div class="header">
        <ul class="router-link">
            <li><router-link to="hello">Hello</router-link></li>
            <li><router-link to="electron-vue">Root</router-link></li>
            <li><router-link to="/">Editor</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'header',

}
</script>

<style lang="css">
.header {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #ccc;
}
.header .router-link{

}

.header .router-link li{
    padding: 0px;
    margin: 0px;
    width: 50px;
}
</style>
