<template>
<div class="newsCell">
   <div class="news-cell-title">短期阻力</div>
   <div class="news-cell-content">对冲研投讯，根反倒是几个就看见的垃圾广东省解放军第四届跟领导说佳都科技拉家带口赶紧删了独孤伽罗几分ID圣诞节看过就拉倒就刚开始就国际快递</div>
   <div class="news-cell-bottom">
      <div class="news-cell-time">2019-07-26 12:34</div>
      <div class="news-cell-type">农产品</div>
   </div>
   
</div>
</template>

<script>
export default {
    name: 'NewsCell',
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
        height: 40px;
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
