<template lang="html">
    <!-- <div> -->
        <div id="wrapper">
            <li><router-link to="hello">Hello</router-link></li>
            <li><router-link to="electron-vue">Root</router-link></li>
            <div id="editor">
                <textarea :value="input" @input="update"></textarea>
                <div v-html="compiledMarkdown"></></div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import marked from "marked"
import debounce from 'lodash/debounce';
export default {
    name: 'markdown-page',
    data: function(){
        return {
            input: '# hello, world'
        }
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
        }
    },
    methods: {
        update: debounce(function (e) {
            this.input = e.target.value
        }, 300)
    }
}
</script>

<style lang="css">
#wrapper {
  background:
    radial-gradient(
      ellipse at top left,
      rgba(255, 255, 255, 1) 40%,
      rgba(229, 229, 229, .9) 100%
    );
  height: 100vh;
  width: 100vw;
}

html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
}

textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
}

textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
}

code {
    color: #f66;
}
</style>
