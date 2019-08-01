<template>
  <div class="search">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SearchView></SearchView>
    <NewsCell class=""></NewsCell>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SearchView from '@/components/SearchView.vue'
import NewsCell from '@/components/NewsCell.vue'

export default {
  name: 'search',
  components: {
    // HelloWorld
    SearchView,
    NewsCell
  }
}
</script>