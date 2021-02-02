<template>
    <div>
        <log></log>
    </div>


</template>

<script>
// @ is an alias to /src
// import log from '@/components/log.vue'
import Log from '../components/log.vue';

export default {
  name: "login",
  components: {
    // HelloWorld
    Log
  },
};
</script>
