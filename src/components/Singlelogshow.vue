<template>
  <div>
    <div class="jumbotron">
      <table class="table" >
        <tr class='text-left text-muted' bgcolor='#EEEEEE'>
          <a :href="log_id" class=' h3'>{{ title }}</a><br>
        </tr>
        <tr class="text-left text-muted" bgcolor='#EEEEEE'>
          {{ author }} | {{ date }}<span v-if='show'> | <a href='' style="color:#B0C4DE">修改</a> | <a href='' style="color:#B0C4DE">删除</a></span><br><br>
        </tr>
        <tr class="h5 text-left text-muted" bgcolor='#EEEEEE'>{{ show_context }}</tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "log_show",
  props: {
    log_id: String,
    title: String,
    author: String,
    date: Date,
    context: String, // 后期需要限制一下字数
    show : Boolean
  },
  computed:{
      show_context(){
          return [...this.context].length<200?this.context:this.context.slice(0,200)+'...'
      }
  }
  //   data() {
  //     return {
  //       log_id:log_id,
  //       title:title,
  //       author:author,
  //       date:date,
  //       context:context,
  //     };
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.jumbotron{
background:require("@/assets/images/3.jpg");
}
</style>
