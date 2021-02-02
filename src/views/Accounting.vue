<template>
  <div class="log_show container">
    <br /><br /><br /><br />
    <h1 class="col-md-6"><b>Did you book today?</b></h1>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div class="text-left input-group">
      <span class="col-md-1"></span>
      <span
        ><label for="" class="col-md-2"
          ><h4><b>摘要</b></h4></label
        ></span
      >
      <div class="col-md-9">
        <input
          type="text"
          name="输出需要的摘要"
          id="abst"
          v-model="abst"
          class="form-control"
        />
      </div>
      <span>
        <br /><br /><br />
        <span class="col-md-1"></span
        ><label for="" class="col-md-2"
          ><h4><b>消费金额</b></h4></label
        ></span
      ><span class="col-md-4"
        ><input
          type="text"
          name="输出需要的摘要"
          id="abst"
          v-model="money"
          class="form-control"
      /></span>
      <span class="col-md-2"
        ><label for=""
          ><h4><b>记账类型</b></h4></label
        ></span
      >
      <span class="col-md-3">
        <select class="form-control" v-model="selected">
          <option>支出</option>
          <option>收入</option>
          <option>其他</option>
        </select></span
      >
      <br /><br /><br /><br /><br />
      <span class="input-group-btn">
        <button
          class="btn btn-primary"
          @click="push()"
          style="background: green"
        >
          Submit
        </button>
      </span>
    </div>
    <br />
    <div class="alert alert-success" v-if="warn_show" role="alert">
      <strong>Success!</strong>插入成功
    </div>
    <div v-else><br /><br /><br /></div>

    <div v-for="item in account_list" :key="item.ts">
      <AccountRecord
        :type="item.type"
        :abst="item.abst"
        :money="item.money"
        :ts="item.ts"
      ></AccountRecord>
    </div>
  </div>
</template>

<script>
import AccountRecord from "../components/account_record.vue";

export default {
  name: "log_show",
  data() {
    return {
      abst: "输入需要记账的内容内容",
      money: "输入需要记账的内容金额",
      selected: "支出",
      warn_show: false,
      account_list:[ // 用于记账
      {
        type: "支出",
        abst: "测试数据1",
        money: 10,
        ts: 1507607368000,
      },
      { type: "支出", abst: "测试数据2", money: 10, ts: 1607607368001 },
      { type: "支出", abst: "测试数据3", money: 10, ts: 1607607368002 },
      { type: "支出", abst: "测试数据4", money: 10, ts: 1607607368230 },
      { type: "支出", abst: "买小零食", money: 10, ts: 1607607362000 },
      { type: "支出", abst: "买小零食", money: 10, ts: 1607607328000 },
      { type: "支出", abst: "买小零食", money: 10, ts: 1607607268000 },
    ],
    };
  },
  components: {
    AccountRecord,
  },
  methods: {
    push() {
      if (Number(this.money)) {
        this.account_list.unshift({
          type: this.selected,
          abst: this.abst,
          money: this.money,
          ts: new Date().getTime(),
        });
        this.warn_show = true;
        setTimeout(() => {
          this.warn_show = false;
        }, 1000);
      } else {
        alert("输出出问题了");
      }
    },
  },
};
</script>
