<template>
  <div id="person" class="container">
    <br /><br /><br /><br />
    <div class='jumbotron'>
      <span class="col-sm-1"></span>
      <span class="col-sm-1"
        ><img src="@/assets/images/2.jpg" class="img_circle img_circle_"
      /></span>
      <span class="col-sm-1"></span>
      <table class="col-sm-8 text-left">
        <tr>
          <td>
            <h3>
              <b>{{ person_name }}</b>
            </h3>
          </td>
        </tr>
        <tr>
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
          <span style="font-size: 17px"
            ><b>{{ Brief_introduction }}</b></span
          >
        </tr>
        <tr>
          <td><span class="text-center">github,qq,微信</span></td>
          <td class="text-right">
            <button
              type="button"
              class="btn btn-info"
              style="background: rgb(3, 125, 252)"
              onclick='alert("哥哥别编辑了,没的编辑的")'
            >
              编辑个人资料
            </button>
          </td>
        </tr>
      </table>
      <span class="col-sm-1"></span>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
    <div>
      <br /><br />
      <span class="col-sm-1"></span>
      <div>
        <h4>学习经历</h4>
        <hr />
        <div class="jumbotron text-left">
          <span>{{ introduction }}</span>
        </div>
        <h4>信息修改</h4>
        <hr />
        <div class="jumbotron text-left">
          <span>
            <form>
                <div v-for='wait_for in mess' :key='wait_for.label1'>
                    <Mess
                :title='wait_for.title'
                :label1='wait_for.label1'
                :label2='wait_for.label2'
              ></Mess>
                </div>
              
            </form>
          </span>
          <span class='text-left col-sm-10'><b>注意: 当密码错误的时候有的功能无法正常使用</b>&copy;PLMS</span>
        </div>
      </div>
      <span class="col-sm-1"></span>
    </div>
  </div>
</template>

<script>
import Mess from "../components/mess_change.vue";
export default {
  data() {
    return {
      person_name: "李军伟",
      Brief_introduction: "没错,我就是那个菜的跟菜狗一样的菜狗",
      introduction:
        "博士，教授，博士生导师，曾任工商管理学院院长助理、信息管理系主任，现任华侨大学教务处副处长。毕业于大连理工大学系统工程研究所，研究方向为数据科学与决策支持。在《Information Sciences》《Knowledge-based Systems》《Expert Systems with Applications》《系统工程理论与实践》《情报学报》《科学学研究》《科研管理》《电子学报》《控制与决策》等国内外重要学术刊物发表论文60多篇，大部分被SCI 和EI收录。根据最新中科院SCI期刊分区(升级版)情况，有12篇论文分别发表在运筹学与管理科学、人工智能和应用数学等领域的TOP期刊，近20篇论文发表在1区和2区期刊。主持2项国家自然科学基金和5项省部级项目，参与完成国家级科研项目多项。 作为第1（或独立）完成人曾获福建省社会科学优秀成果二等奖（政府奖），福建省高校新世纪优秀人才支持计划，福建省高校杰出青年科研人才培育计划，辽宁省优秀博士学位论文，泉州市第三层次人才(共7层次)，连续获得 2014-2016年度与2016-2018年度两届华侨大学“学术英才”称号。",
      mess: [
        {
          title: "想好了就提交吧,别磨磨唧唧的",
          label1: "HQU Account",
          label2: "HQU password",
        },
        {
          title: "想好了就提交吧,别磨磨唧唧的",
          label1: "话费剩余量",
          label2: "预计月均话费消耗",
        },
        {
          title: "想好了就提交吧,别磨磨唧唧的",
          label1: "水费剩余量",
          label2: "预计月均水费消耗",
        },
        {
          title: "想好了就提交吧,别磨磨唧唧的",
          label1: "电费剩余量",
          label2: "预计月均电费消耗",
        },
        {
          title: "教务处的哦",
          label1: "教务处账号",
          label2: "教务处密码",
        },
      ],
    };
  },
  components: {
    // HelloWorld
    Mess,
  },
};
</script>
<style scoped>
.img_circle_ {
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 50%;
}
</style>