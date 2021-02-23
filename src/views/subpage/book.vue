<template>
  <div class="subpage">
    <ContentBox>
      <subpageTitle :thispage="'도서'" :pageguide="''" />
      <!-- <div class="listbox">
        <b-button variant="text-line on">HTML/CSS</b-button>
        <b-button variant="text-line">JAVASCRIPT</b-button>
        <b-button variant="text-line">FRAME WORK</b-button>
        <b-button variant="text-line">데이터 과학</b-button>
      </div> -->
      <slickcontent :datas="newbooks" :settings="settings" class="subpageroll" />
      <section class="page-detail">
        <h1 class="booktitle"><i class="bi bi-book-half" />Do it! 웹 사이트 따라 만들기<span>HTML, CSS, 자바스크립트, jQuery, Ajax로 웹 퍼블리싱</span></h1>
        <div class="detailwrap">
          <div class="imgview">
            <div class="imgbook"><img src="/images/t03.jpg" alt=""></div>
            <div class="imgbtn">
              <b-button variant="lightgray"><i class="bi bi-search"></i>책 미리보기</b-button>
              <b-button variant="lightgray"><i class="bi bi-hdd"></i>전자책</b-button>
            </div>
          </div>
          <div class="bookinfo">
            <ul class="infolist">
              <li>
                <strong class="lable">저   자</strong>
                <span class="content">김윤미</span>
              </li>
              <li>
                <strong class="lable">발행일</strong>
                <span class="content">2019-12-05</span>
              </li>
              <li>
                <strong class="lable">사   양</strong>
                <span class="content">312쪽  |  188*257mm</span>
              </li>
              <li>
                <strong class="lable">I S B N</strong>
                <span class="content">979-11-6303-124-6 15000</span>
              </li>
              <li>
                <strong class="lable">포맷/용량PDF</strong>
                <span class="content">PDF  |  77MB</span>
              </li>
              <li>
                <strong class="lable">정   가</strong>
                <span class="content">11,000 원</span>
              </li>
              <li>
                <strong class="lable">상   태</strong>
                <span class="content">정상 판매중</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="tapwrap"> 
          <div class="detailTap">
            <b-radio-group 
              v-model="selected"
              :options="options"
              class="tapgroup"
              buttons
            />
          </div>
          <section class="tapcon">
            <template v-if="selected == 'a'">
              <h1 class="booklist-title"><strong><i class="bi bi-mic" />"Do it! 웹 사이트 따라 만들기"</strong>를 소개 합니다.</h1>
              웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로 <br />
              웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
              이 책 한권이면 웹 사이트 하나가 뚝딱 완성<br /><br /><br />
              이런분께 권해 드려요<br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </template>
            <template v-else-if="selected == 'b'">
              <h1 class="booklist-title"><strong><i class="bi bi-chat-left-text" />"Do it! 웹 사이트 따라 만들기"</strong>출판사 리뷰 입니다.</h1>
              웹 어워드코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로 <br />
              웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
              이 책 한권이면 웹 사이트 하나가 뚝딱 완성<br /><br /><br />
              이런분께 권해 드려요<br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </template>
            <template v-else-if="selected == 'c'">
              <h1 class="booklist-title"><strong><i class="bi bi-layout-text-sidebar-reverse" />"Do it! 웹 사이트 따라 만들기"</strong>목차 입니다.</h1>
              웹 어워드코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로 <br />
              웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
              이 책 한권이면 웹 사이트 하나가 뚝딱 완성<br /><br /><br />
              이런분께 권해 드려요<br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </template>
            <template v-else-if="selected == 'd'">
              <h1 class="booklist-title"><strong><i class="bi bi-journal-text" />"Do it! 웹 사이트 따라 만들기"</strong>저자소개 입니다.</h1>
              웹 어워드코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로 <br />
              웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
              이 책 한권이면 웹 사이트 하나가 뚝딱 완성<br /><br /><br />
              이런분께 권해 드려요<br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </template>
            <template v-else-if="selected == 'e'">
              <h1 class="booklist-title"><strong><i class="bi bi-person-check" />"Do it! 웹 사이트 따라 만들기"</strong>추천의글 입니다.</h1>
              웹 어워드코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로 <br />
              웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
              이 책 한권이면 웹 사이트 하나가 뚝딱 완성<br /><br /><br />
              이런분께 권해 드려요<br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </template>
            <template v-else-if="selected == 'f'">
              <h1 class="booklist-title"><strong><i class="bi bi-person-check" />"Do it! 웹 사이트 따라 만들기"</strong>자료실 입니다.</h1>
              웹 어워드코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로 <br />
              웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
              이 책 한권이면 웹 사이트 하나가 뚝딱 완성<br /><br /><br />
              이런분께 권해 드려요<br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </template>
            <template v-else-if="selected == 'g'">
              <h1 class="booklist-title"><strong><i class="bi bi-inboxes" />"Do it! 웹 사이트 따라 만들기"</strong>자료실 입니다.</h1>
              웹 어워드코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로 <br />
              웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
              이 책 한권이면 웹 사이트 하나가 뚝딱 완성<br /><br /><br />
              이런분께 권해 드려요<br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </template>
          </section>
          
        </div>
        
      </section>
    </ContentBox>
  </div>
</template>
<style>

 
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
        {imgurl:'/images/t01.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t03.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t04.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t05.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t06.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t07.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t08.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' }
      ],
      settings:{
        slidesToShow:8,
        arrows:true,
        dots:false,
        infinite:true,
        responsive:[
          {
            breakpoint:900,
            settings:{
              slidesToShow:5,
            }
          },
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
      selected:"a",
      options:[
        {html: '<i class="bi bi-mic" /> 책소개', value:"a"},
        {html:'<i class="bi bi-chat-left-text" /> 출판사 리뷰', value:"b"},
        {html:'<i class="bi bi-layout-text-sidebar-reverse" /> 목차', value:"c"},
        {html:'<i class="bi bi-journal-text" /> 저자소개', value:"d"},
        {html:'<i class="bi bi-person-check" /> 추천의 글', value:"f"},
        {html:'<i class="bi bi-inboxes" /> 자료실', value:"g"},
      ]

    }
  }
}
</script>