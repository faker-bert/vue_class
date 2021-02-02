<template>
  <div class="container">
    <br /><br /><br /><br />
    <h1 class="col-md-6"><b>The consumption of life</b></h1>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div v-for='item in fees' :key='item.what'>
        <Process :what='item.what' :valuenow="item.valuenow" :valuemin="item.valuemin" :valuemax="item.valuemax" />
    </div>
    <div class = 'text-right col-md-10'> you can explore more in this system Copyright&copy;PLMS</div>
  </div>
</template>

<script>
import Process from "../components/process.vue";

export default {
    data(){
        return {
            fees:[
                {
                    what:'电费',
                    valuenow:2,
                    valuemin:0,
                    valuemax:100,
                    title:'剩余'+100+'电费'
                },
                   {
                    what:'HQU',
                    valuenow:4,
                    valuemin:0,
                    valuemax:100,
                    title:'剩余'+100+'电费'
                },
                {
                    what:'水费',
                    valuenow:40,
                    valuemin:2,
                    valuemax:100,
                    title:'剩余'+100+'电费'
                },
                 {
                    what:'话费',
                    valuenow:50,
                    valuemin:0,
                    valuemax:100,
                    title:'剩余'+100+'电费'
                }
            ]
        }
    },
  components: { Process },
};
</script>