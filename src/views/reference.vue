<template>
  <Subpage :patetit="'자료실'">
  	<div class="referencepage">
      <div class="subpageguide">도서와 관련된 추가 자료를 다운로드할 수 있습니다.</div>
  		<listComm :listData="lists" />
  	</div>
  </Subpage>
</template>
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
          img:'/images/books_image/book01.jpg',
          title:'Do it! 웹사이트 따라 만들기 실습 파일 내려받기', 
          date:'2019.11.30' , 
          dec:'독자를 위한 실전 프로젝트입니다.<br /> 단계별로 공부할 수 있습니다', 
          link1:'https://drive.google.com/drive/folders/1rlcNe6tZR6m2coR9WKTyRse2qhQBxq83',
          link:'https://drive.google.com/drive/folders/1rlcNe6tZR6m2coR9WKTyRse2qhQBxq83' 
        },
        {
          img:'/images/books_image/book28.jpg',
          title:'Do it! HTML+CSS+자바스크립트 웹 표준의 정석 실습 파일과 학습 파일 내려받기', 
          date:'2019.04.15' , 
          dec:'본문 전체의 예제소스 파일입니다.', 
          link1:'https://drive.google.com/file/d/1piPD2RGEgzhHL416AjhQdNBNDLwS5bW-/view',
          link:'https://drive.google.com/file/d/1piPD2RGEgzhHL416AjhQdNBNDLwS5bW-/view' 
        }
      ]
    }
  }
}
</script>