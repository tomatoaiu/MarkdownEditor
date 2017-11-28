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
.header ul{
    padding: 0px;
    margin: 0px;
}
.header .router-link li{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    margin: 0px;
    display: inline-block;
}
.header .router-link li:first-child{
    padding-left: 30px;
}
.header .router-link li:last-child{
    padding-right: 0px;
}
.header .router-link li a{
    text-decoration: none;
}
.header .router-link li a:hover{
    opacity: 0.3;
}
</style>
