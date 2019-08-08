<template>
<div class="newsCell">
   <div class="news-cell-title">{{NewsInfo.title}}</div>
   <div class="news-cell-content">{{NewsInfo.content}}</div>
   <div class="news-cell-bottom">
      <div class="news-cell-time">{{NewsInfo.time}}</div>
      <div class="news-cell-type" v-for="newsTag in NewsInfo.newsTag">{{newsTag}}</div>
   </div>
   
</div>
</template>

<script>
export default {
    name: 'NewsCell',
    props: {
        NewsInfo: {
            title:String,
            content:String,
            time:String,
            newsTag:[String]
        }
    }
}
</script>

<style lang="less">
.newsCell {
    border-top: 1px solid rgba(200, 200, 200, 1.0);
    border-bottom: 1px solid rgba(200, 200, 200, 1.0);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: stretch;
    .news-cell-title {
        text-align: left;
        font-size: 16px;
        flex: 1 0 auto;
    }
    .news-cell-content {
        text-align: left;
        font-size: 14px;
        flex: 1 1 auto;
        height: 60px;
        overflow: hidden;
    }
    .news-cell-bottom {
        text-align: left;
        font-size: 14px;
        flex: 1 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        .news-cell-time {
            flex: 0 1 auto;
            padding-right: 20px;
        }
        .news-cell-type {
            flex: 1 1 auto;
        }
    }
}
</style>
