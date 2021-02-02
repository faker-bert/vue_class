<template>
  <div class="container">
    <div class="col-md-2"></div>
    <div class="jumbotron">
      <span class="col-md-10"
        ><h3 class="text-center">
          TITLE: <span style="color: #42b983">{{ title }}</span>
        </h3></span
      ><br /><br /><br /><br />
      <span class="col-md-1"></span
      ><span class="col-md-5 text-center" bgcolor="#EEEEEE"
        >author : {{ author }} </span
      ><span class="col-md-4 text-right">
        time : {{ new Date(ts).toLocaleString() }}</span
      >
    </div>
    <div class="col-md-2"></div>
  </div>
</template>


<script>
export default {
  props: {
    author: String,
    title: String,
    abst: String,
    // show_abst:[...this.abst].length,
    ts: Number,
  }
};
</script>