<template>
  <section class="reference">
    <h1 class="title link">
      <span>자료실</span> 
      <pageBtn :link="'/reference'" :text="'more'" :class="'more'" />
    </h1>
    <ul>
      <li v-for="(item, index) in referenceLists" :key="index">
        <span v-html="item.listname"></span>
        <span v-html="item.date" class="date">2020.06.01</span>
      </li>
    </ul>
  </section>
</template>
<script>
import pageBtn from "../../components/pageBtn.vue"
export default {
  components:{
    pageBtn
  },
  data(){
    return{
      referenceLists:[
        {listname:'입고내용 안내입니다.' , date:'2020.06.01'},
        {listname:'배송공지 안내입니다.' , date:'2020.06.01'},
        {listname:'휴무공지 안내입니다.' , date:'2020.03.01'},
      ]
    }
  }
}
</script>