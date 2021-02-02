<template>
  <div class="jumbotron">
    <span class="col-md-2 text-left"><b>类型 : </b>{{ type }}</span
    ><span class="col-md-5 text-left" :title='abst'> <b>摘要 : </b>{{ show_abst }}</span
    ><span class="col-md-2 text-left"><b>消费额度 : </b>{{ money }}</span
    ><span class="col-md-3 text-left"><b>时间 : </b>{{ new Date(ts).toLocaleString()  }}</span>
    <br>
  </div>
</template>

<script>

export default {
  props: {
    type: String,
    abst: String,
    // show_abst:[...this.abst].length,
    money: Float32Array,
    ts: Int8Array,
  },
  computed:{
      show_abst(){
        return [...this.abst].length<21?this.abst:this.abst.slice(0,20)+'...'
      }
  }
 
};
</script>