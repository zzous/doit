<template>
  <div class="rollcontent">
    <VueSlickCarousel  v-bind="settings">
      <div class="rollimg" v-for="(item, index) in datas" :key="index">
        <span class="imgbox"><img :src="item.imgurl" /></span>
        <span class="textbox">
          <strong v-html="item.name"></strong>
          <em v-html="item.subdec"></em>
        </span>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
export default {
  props:['datas', 'settings'],
  data(){
    return{
      
    }
  }
}
</script>