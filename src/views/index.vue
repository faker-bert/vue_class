<template>
  <div v-if="seen">
    <img src="@/assets/images/门神.png" width="100%" />
    <br><br><br><br>
    <div class="hello">
      <div class="container">
        <div id="advertising" style="left: 0%" class="row" v-if="seen">
          <div class="col-sm-1"></div>
          <div class="col-sm-6">
            <table class="table" rules="none">
              <!-- 增加rules=none就可以隐藏所有的框线 -->
              <thead class="col-4">
                <tr>
                  <th class="text-left">
                    <span v-html="content"></span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-3">
            <table class="table text-right col-4" style="border-style: none">
              <thead>
                <tr>
                  <th class="text-center">
                    <h4>广告位招租--招商区</h4>
                    <img src="@/assets/images/icon.png" height="45px" />
                  </th>
                </tr>
              </thead>
              <tr
                v-for="advertiser in advertisers"
                :key="advertiser.advertising_id"
              >
                <div>
                  <td>
                    <img :src="advertiser.ad_photo" width="250px" :alt="advertiser.context"/></td>
                    <br>
                </div>
                </tr>
              <tr>
                <td class="text-center">诚信欢迎各位加盟</td>
              </tr>
            </table>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import 'markdown-it-vue/dist/markdown-it-vue-light.css'
import Footer from "@/components/footer.vue"
const marked = require('marked')
import index from '../md/index.md'
// console.log(helloMarked)
export default {
  name: "home",
  components: {
    // MarkdownItVueLight
    Footer
  },
  data() {
    return {
      content: marked(index),
      advertisers: [
        {//注意这边必须使用require进行包裹
          advertising_id: 0,
          ad_photo: require( "@/assets/images/2.jpg"),
          context: "广告商一号占领广告位",
        },
        {//注意这边必须使用require进行包裹
          advertising_id: 1,
          ad_photo: require( "@/assets/images/2.jpg"),
          context: "广告商一号占领广告位",
        },
        {
          advertising_id: 2,
          ad_photo: require("@/assets/images/3.jpg"),
          context: "广告商三号占领广告位",
        },
      ],
      seen:
        window.location.pathname == "/" ||
        window.location.pathname == "/index"
    };
  },
};

// document.getElementById('insert').HTML(helloMarked)
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
</style>
