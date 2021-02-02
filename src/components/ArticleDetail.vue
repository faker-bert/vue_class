<template>
    <div class='ArticleDetail container text-left'>
        <span class='col-md-1'></span><span v-html="context" class='col-md-10 jumbotron'></span> <span class='col-md-1'></span>
    </div>
</template>

<script>
export default {
    props:{
        context:String
    }
}
</script>