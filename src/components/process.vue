<template>
  <div>
    <span class="col-md-2"
      ><label>{{what}}</label></span
    >
    <div class="progress col-md-8">
      <div
        class="progress-bar progress-bar-striped active"
        role="progressbar"
        :aria-valuenow="valuenow"
        :aria-valuemin="valuemin"
        :aria-valuemax="valuemax"
        style="min-width: 3em;"
        :style='"width:"+prop'
        :title="title"
      >
        {{ prop }}
      </div>
    </div>
    <span class="col-md-2"></span>
    <br><br><br>
  </div>
</template>

<script>
export default {
  props: {
    what: String,
    valuenow: Number ,
    valuemin: Number ,
    valuemax: Number,
    title:String
  },
  computed: {
    prop() {
      return (
        ((this.valuenow - this.valuemin) / (this.valuemax - this.valuemin)).toFixed(2) *
          100 +
        "%"
      );
    },
  },
};
</script>