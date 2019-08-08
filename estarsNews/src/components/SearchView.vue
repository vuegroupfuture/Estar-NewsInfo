<template>
    <div class="search-bg">
        <mt-search class="input-bg-view" cancel-text="关闭" placeholder="搜索"></mt-search>
        <div class="search-time" @click="openPicker">
            <div class="search-time-str">{{pickerValue}}</div>
            <div class="estar-icon-down-arrow"></div>
        </div>
        <mt-datetime-picker ref="picker" type="date" 
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleConfirm"
        >
        </mt-datetime-picker>
    </div>
</template>

<script>
export default {
  name: 'newsCell',
  methods: {
    search: function () {

    },
    openPicker() {
        this.$refs.picker.open();
    },
    handleConfirm (value) {
        this.pickerValue = this.formatDate(value);
    },
    formatTen(num) {
        return num > 9 ? (num + "") : ("0" + num);
    },
    formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + '-' + this.formatTen(month) +'-' + this.formatTen(day);
    }
  },
  data:function() {
      return {
        pickerValue:'2019-08-07'
      }
  }
}
</script>

<style lang="less">
.search-bg {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .input-bg-view {
        border: 1px solid rgba(200, 200, 200, 1.0);
        padding: 0px;
        margin-right:20px; 
        border-radius: 5px;
        flex: 1 1 100px;
        width:100px;
        height: 20px;
        .mint-searchbar {
            padding: 0px;
        }
        .mint-searchbar-inner {
            height: 20px;
            padding: 0px;
        }
        .mint-searchbar-cancel {
            font-size: 12px;
            padding-right: 10px;
            color: rgb(73, 62, 62);
        }
    }
    .search-time {
        border: 1px solid rgb(200, 200, 200);
        height: 20px;
        border-radius: 5px;
        display: flex;
        flex: 0 0 90px;
        font-size: 12px;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .search-time-str {
            flex: 0 0 70px;
        }
        .estar-icon-down-arrow {
            width: 16px;
            height: 16px;
        }
    }
}
</style>
