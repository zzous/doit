<template>
	<div class="main">
    <div class="mainbanner" ><img src="/images/mainimg.png" /></div>
    <section class="maincontent" >
      <ContentBox>
        <div class="flexbox referencewrap">
          <RollingClass />
          <referencelist />
          <section class="bannerzone">
            <h1 class="title">
              <strong>교재샘플/강의자료</strong>요청하기
              <pageBtn :link="'/classsample'" :text="'more'" :class="'more'" />
            </h1>
            <pageBtn :link="'/classsample'" :classname="'bannerbtn'" >
              <span class="classbanner">
                이지스퍼블리싱 도서를 교재로 <br />
                채택하고 싶으신 분이나 샘플요청 및<br />
                단체 구매에 대한 문의주세요
              </span>
            </pageBtn>
          </section>
        </div>
        <section class="new">
          <h1 class="pdttitle">New Arrivals<span>새로 입고된 도서를 소개합니다.</span></h1>
          <slickcontent :datas="newbooks" :settings="settings" />
        </section>
      </ContentBox>
    </section>

	</div>
</template> 
<script>
import ContentBox from "../../components/ContentBox.vue"
import RollingClass from "../components/RollingClass.vue"
import referencelist from "../components/referencelist.vue"
import pageBtn from "../../components/pageBtn.vue"
import Slickcontent from '../components/Slickcontent.vue'
export default {
  components:{
    ContentBox,
    RollingClass,
    referencelist,
    pageBtn,
    Slickcontent,
  },
  data(){
    return{
      newbooks:[
        {imgurl:'/images/t01.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t03.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t04.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t05.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t06.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t07.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t08.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
      ],
      settings:{
        slidesToShow:5,
        arrows:true,
        dots:false,
        infinite:true,
        responsive:[
          {
            breakpoint:767,
            settings:{
              slidesToShow:4,
            }
          },
          {
            breakpoint:414,
            settings:{
              slidesToShow:2,
            }
          }
        ]
      },
    }
  }
}
</script>
