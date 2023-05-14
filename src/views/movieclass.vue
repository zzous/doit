<template>
  <Subpage :patetit="'동영상강의'">
    <div class="moveclasspage">
      <div class="subpageguide">도서와 관련된 동영상을 보거나 다운로딩하실 수 있습니다.</div>
      <listComm :listData="lists" />
    </div>
  </Subpage>
</template>
<style>

</style>
<script>
import Subpage from "../layout/components/Subpage.vue"
import listComm from "../layout/components/listComm.vue"
export default {
  components:{
    Subpage,
    listComm
  },
  data(){
    return{
      lists:[
        {
          img:'/images/books_image/book03.jpg',
          title:'Do it! C# 프로그래밍 입문', 
          date:'2022.10.18' , 
          dec:'채널에 접속하시면 전체 강의를 볼 수 있습니다. (출간 후 차례로 업데이트 예정)', 
          link1:'https://www.youtube.com/playlist?list=PLHUVRivHVlixV3NeI0ChOilmjHhJ_3P0I',
          link:'https://www.youtube.com/playlist?list=PLHUVRivHVlixV3NeI0ChOilmjHhJ_3P0I' 
        },
        {
          img:'/images/books_image/book27.jpg',
          title:'Do it! 깡샘의 플러터 & 다트 프로그래밍', 
          date:'2023.02.08' , 
          dec:'본 강의는 무료와 유료 버전으로 구분되며 출간 후 순차적으로 업데이트 예정입니다.', 
          link1:'https://bit.ly/3XjRGN4',
          link:'https://bit.ly/3XjRGN4' 
        }
      ]
    }
  }
  
}
</script>