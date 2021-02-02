<template>
  <div class="markdown text-left">
    <br />
    <div class="input-group">
      <span class='col-sm-5'><input
        type="text"
        class="form-control"
        id="Title"
        value='Title Here'
        aria-describedby="basic-addon3"
      /></span>
      <span class='col-sm-4'><input
        type="text"
        class="form-control"
        id="author"
        value='author Here'
        aria-describedby="basic-addon3"
      /></span>
      <span class="col-md-2">
        <select class="form-control" v-model="selected">
          <option>公开</option>
          <option>不公开</option>
        </select></span
      >
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" style='background:green' title='When the log is finished, submit on this side of the point'>Submit</button>
      </span>
      <!-- <input
        type="text"
        class="form-control"
        id="Summary"
        value='Summary Here'
        aria-describedby="basic-addon3"
      /> -->
    </div>
    <span class='col-sm-12'>
    <input
        type="text"
        class="form-control"
        id="Summary"
        value='Summary Here'
        aria-describedby="basic-addon3"
      /></span><br><br>
    <MarkdownPro
      class="text-left"
      :bordered="false"
      theme="light"
      :height="754"
      v-model="value"
    />
    <!-- <mavon-editor v-model="value" :ishljs = "true"/> -->
    <!-- <hr>
        <div id="editor">
      <textarea :value="input" @input="update"  height='auto'></textarea>
      <div v-html="compiledMarkdown"></div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
// import 'markdown-it-vue/dist/markdown-it-vue-light.css'
import { MarkdownPro } from "vue-meditor";
import _ from "lodash";
const marked = require("marked");
export default {
  data() {
    return {
      // input: "# hello"
      selected:'公开',
      value: "在此处输入日志内容(基于markdown语法)",
    };
  },
  components: {
    MarkdownPro,
    // mavonEditor
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
  },
};
// document.getElementsByClassName()
// document.getElementsByClassName('navbar-header').style.display ='block'
</script>
<style>
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
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
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>