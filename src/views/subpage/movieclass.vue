<template>
  <div class="subpage">
    <ContentBox>
      <subpageTitle :thispage="'동영상강의'"  :pageguide="'도서와 관련된 동영상을 보거나 다운로딩하실 수 있습니다.'"/>
      <div class="pagelistnum">총 <strong>36건</strong>이 등록되어 있습니다.</div>
      <div class="thumlistwrap movie">
        <div class="listcon">
          <div class="thum"><img src="/images/t03.jpg" alt=""></div>
          <div class="listdetail">
            <strong>『Do it! HTML+CSS+자바스크립트 웹 표준의 정석』 동영상 강의입니다.</strong>
            <div class="listdate">등록일 : 2019.04.15</div>
            <div class="subdec">책을 다 공부한 독자를 위한 실전 프로젝트입니다.<br /> 웹 사이트에서 자주 사용하는 "이미지 슬라이드 쇼" 프로그램을 만드는 방법을 단계별로 공부할 수 있습니다.​</div>
            <div class="listbtns">
              <b-button><i class="bi bi-folder-symlink"></i>소스 파일 내려받기</b-button>
              <b-button> <i class="bi bi-table"></i>정오표</b-button>
            </div>
            <p class="downguide">※ 다운로드가 안 될 경우 <br />회사에서 접속한 경우 사내 보안 등의 이유로 다운로드가 되지 않을 수 있습니다. <br /> [질문답변] 게시판으로 연락주시면 별도로 송부하겠습니다.</p>
          </div>
        </div>
      </div>
      <div class="pageing">
        <a href="#"><i class="bi bi-skip-backward"></i></a>
        <a href="#"><i class="bi bi-skip-start"></i></a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#"><i class="bi bi-skip-end"></i></a>
        <a href="#"><i class="bi bi-skip-forward"></i></a>
      </div>
      
    </ContentBox>
  </div>
</template>
<style>
.movie .listcon .listdetail strong{color:#7952b3}
.movie  .listbtns > .btn{background-color:#7952b3;}
</style>
<script>
import pageBtn from "../../components/pageBtn.vue"
import ContentBox from "../../components/ContentBox.vue"
import Slickcontent from '../components/Slickcontent.vue'
import subpageTitle from '../components/subpageTitle.vue'
export default {
  components:{
    pageBtn,
    ContentBox,
    Slickcontent,
    subpageTitle
  },
}
</script>