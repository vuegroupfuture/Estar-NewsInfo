<template>
  <div class="search">
    <!-- <SearchView></SearchView>
    <NewsCell class="news-cell" v-for="NewsInfo in NewsInfos" :key="NewsInfo.id" :NewsInfo = NewsInfo></NewsCell> -->
    <div class="info">{{info}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SearchView from '@/components/SearchView.vue'
import NewsCell from '@/components/NewsCell.vue'
import axios from 'axios'

export default {
  name: 'search',
  components: {
    // HelloWorld
    SearchView,
    NewsCell
  },
  mounted () {
    // axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // // .then(response => (this.info = response))
      // .then(function (response) {
      //   this.info = response;
      //   console.log(response);
      // })
    axios.post('http://40.125.162.70/v2/getClass.cgi')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  data:function() {
    return {
      info:null,
      NewsInfos:[
        {
          title:"短期阻力",
          content:"何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用",
          time:"2019-8-04 12:24",
          newsTag:["tc资讯","分时图","农产品"]
        },
        {
          title:"短期阻力",
          content:"何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用",
          time:"2019-8-04 12:24",
          newsTag:["tc资讯","分时图","农产品"]
        },
        {
          title:"短期阻力",
          content:"何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用",
          time:"2019-8-04 12:24",
          newsTag:["tc资讯","分时图","农产品"]
        },
        {
          title:"短期阻力",
          content:"何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用",
          time:"2019-8-04 12:24",
          newsTag:["tc资讯","分时图","农产品"]
        },
        {
          title:"短期阻力",
          content:"何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用",
          time:"2019-8-04 12:24",
          newsTag:["tc资讯","分时图","农产品"]
        },
        {
          title:"短期阻力",
          content:"何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用",
          time:"2019-8-04 12:24",
          newsTag:["tc资讯","分时图","农产品"]
        },
        {
          title:"短期阻力",
          content:"何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用",
          time:"2019-8-04 12:24",
          newsTag:["tc资讯","分时图","农产品"]
        }
      ]
    }
  }
}
</script>