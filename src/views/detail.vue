<template>
  <div class="article">
    <br /><br /><br />
    <Articletitle :author='"李军伟"' :title='"基于微博数据挖掘的“新冠疫情”评论文本分析"' :abst='"李军伟"' :ts='1607607368001'/>
    <br><br>
    <h4>正文</h4><hr>
    <ArticleDetail :context='context'/>
  </div>
</template>

<script>
import Articletitle from "@/components/Articletitle.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";
const marked = require('marked')
import index from '../md/index.md'
console.log(index)
export default {
    data(){return{
        context: marked(index)
    }},
  components: {
    Articletitle,
    ArticleDetail
  },
};
</script>