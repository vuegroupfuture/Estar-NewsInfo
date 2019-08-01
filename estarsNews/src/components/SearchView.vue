<template>
    <div class="search-bg">
        <div class="input-bg-view">
            <div class="estar-icon-search"></div>
            <div class="search-input">
               <input class="search-in" type="text" placeholder="search">
            </div>
        </div>
        <div class="search-button" @click="search">搜索</div>
        <div class="search-time">
            <div class="search-time-str">2019-07-24</div>
            <div class="estar-icon-down-arrow"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'newsCell',
  methods: {
    search: function () {

    }
  }
}
</script>

<style lang="less">
.search-bg {
    padding-top: 40px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .input-bg-view {
        border: 1px solid rgba(200, 200, 200, 1.0);
        border-radius: 5px;
        flex: 1 1 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        .estar-icon-search {
            width: 15px;
            height: 15px;
            flex: 0 0 15px;
        }
        .search-input {
            flex: 1 1 auto;
            text-align: left;
        }
    }
    .search-button {
        margin: 0 20px;
        width: 30px;
        height: 20px;
        padding: 0px;
        text-align: center;
        font-size: 14px;
        border: 1px solid rgba(200, 200, 200, 1.0);
        border-radius: 5px;
        flex: 0 0 40px;
    }
    .search-time {
        border: 1px solid rgb(200, 200, 200);
        border-radius: 5px;
        display: flex;
        flex: 0 0 80px;
        font-size: 14px;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
        .estar-icon-down-arrow {
            width: 8px;
            height: 8px;
        }
    }
}
</style>
