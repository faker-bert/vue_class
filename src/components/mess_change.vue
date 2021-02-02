<template>
  <div>
    <div class="form-group col-sm-5">
      <label :for="label1">{{label1}}</label>
      <input type="text" class="form-control" :id="label1" />
    </div>
    <div class="form-group col-sm-6">
      <label :for="label2">{{label2}}</label>
      <input
        type="text"
        class="form-control"
        :id="label2"
        :placeholder="label2"
      />
    </div>
    <div class="form-group col-sm-1 text-left">
      <br />
      <span class="input-group-btn">
        <button
          class="btn btn-primary"
          type="button"
          style="background: green"
          :title="title"
        >
          Submit
        </button>
      </span>
    </div>
  </div>
</template>


<script>
export default {
    props:{
        label1:String,
        label2:String,
        title:String
    }
}
</script>