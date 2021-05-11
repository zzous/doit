<template>
	<div class="main">
    <div class="mainbanner" ><img src="/images/mainimg.png" /></div>
    <section class="maincontent" >
      <ContentBox>
        <div class="flexbox referencewrap" style="display:none">
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
          <h1 class="pdttitle">새로 나온 도서<span>분야별로 새로 나온 도서를 만나보세요</span></h1>
          <div class="tap">
            <b-button variant="tap active">IT전문서</b-button>
            <b-button variant="tap">업무 능력, 기타</b-button>
            <b-button variant="tap">사진 예술</b-button>
            <b-button variant="tap">데이터 과학</b-button>
          </div>
          <slickcontent :datas="newbooks" :settings="settings" />
        </section>
      </ContentBox>
        <section class="searcharea">
          <h1 class="pdttitle">도서검색<span>찾고자하는 도서명을 검색해 주세요</span></h1>
          <div class="inputarea">
          <b-form-input  v-model="seacherkeyword"  />
          <b-button variant="search"><i class="bi bi-search"></i></b-button>
          <div class="autolayer" v-if="autocomplate">
            <ul v-if="!(this.catanum==null)">
              <li v-for="(item, index) in booksname[this.catanum].books" :key="index" v-html="item.booktit" @click="autochange(item.booktit)"></li>
            </ul>
          </div>
          </div>
          <div class="guidehash">
            <span>#html</span>
            <span>#vue</span>
            <span>#css</span>
            <span>#javascript</span>
            <span>#자료구조/알고리즘</span>
            <span>#파이썬</span>
          </div>
        </section>
      <ContentBox>
        <section class="mainmenu">
          <div class="itembox">
            <div class="itemtit">
              <span>대학교수,교육기관 강사전용</span>
              <strong>교재샘플/강의자료</strong><br />요청하기
              <i class="bi bi-stickies"></i>
            </div>
          </div>
          <div class="itembox">
            <div class="itemtit">
              <span>스터디카페</span>
              <strong>DO IT!</strong><br />스터디룸
              <i class="bi bi-book-half"></i>

            </div>
          </div>
          <div class="itembox">
            <div class="itemtit">
              <span>이지스의 sns</span>
              <strong>DO IT!</strong><br />페이스 북
              <i class="bi bi-facebook"></i>

            </div>
          </div>
        </section>
        <section class="notice">
          
          <div class="noticebox" :class="{full:more}">
            <b-button variant="noticemore" @click="morenotice" />
            <h1 class="pdttitle">공지사항</h1>
            <div class="newsitem">
              <strong>이지스퍼블리싱/이지스에듀 저작물 이용 가이드라인</strong>
              <!-- <p>이지스퍼블리싱(주)의 모든 저작물은 저작권의 보호를 받고 있습니다. 이지스퍼블리싱(주)의 허락을 받아...</p> -->
              <span>2021-03-30</span>
            </div>
            
            <div class="newsitem">
              <strong>[서평단 모집] Do it! 오토캐드 2021</strong>
              <span>2020.06.04</span>
            </div>
            <div class="newsitem">
              <strong>IT 분야 기획편집자 신입⦁경력직 모집중(~6/24(수요일)까지)</strong>
              <span>2020.06.03</span>
            </div>
          </div>
        </section>
      </ContentBox>
    </section>

	</div>
</template> 
<style>
.maincontent{padding:0}
.pdttitle{font-size:38px; color:#222; font-weight: 900; text-align: center;}
.pdttitle span{display:block; font-size:18px; margin-top:10px}
.notice{margin:40px 0 0 0}
.noticebox{background:#d1e0e5; height:55px; overflow: hidden; padding:20px 80px 10px 140px; border-radius: 10px 10px 0 0;position: relative;}
.noticebox.full{height:auto;}
.noticebox .pdttitle{position: absolute; left:10px; top:16px; font-size: 25px;padding-left:0}
.noticebox .newsitem{display:flex;justify-content:space-between; align-items: center; }

.noticebox .newsitem+.newsitem{margin-top:10px}
.noticebox .newsitem strong{display:block; font-size:15px; color:#676767}
.noticebox .newsitem span{display:block; font-size:13px; color:#888}

.btn-noticemore{width:25px;height:25px; transform:rotate(-90deg); background: url(/images/arrow-icon.png) no-repeat 0 0/100%;position: absolute;top: 20px;right:20px;z-index: 9;}
.noticebox.full .btn-noticemore{transform:rotate(90deg); }
.searcharea{margin:60px 0 40px; padding:40px 0; background:#454545;}
.searcharea .pdttitle{color:#fff}
.searcharea .inputarea{max-width:650px; margin:0 auto; position: relative;}
.searcharea .inputarea .form-control{padding:0 40px; font-size:16px;border:none}
.searcharea .guidehash{max-width:650px; margin:0 auto; text-align: center;}
.searcharea .guidehash > span{display:inline-block;margin-left:10px; margin-top:10px;color:#eee; font-size: 16px;}
.searcharea .guidehash > span:nth-of-type(1){margin-left:0px}
.tap{margin:45px 0;text-align: center; display: flex; justify-content: space-evenly;}
.inputarea .btn-search{position: absolute; right:10px; top:2px; width:40px;height:40px}
.inputarea .btn-search .bi:before{font-size:24px}
.mainmenu{display: flex; justify-content: space-between;}
.mainmenu .itembox{flex-basis:32%; background:#f1f1f1; padding:30px 30px 50px 30px; border-radius: 12px;position: relative;}
.mainmenu .itembox .itemtit{color:#222; font-size:20px;}
.mainmenu .itembox .itemtit .bi{position:absolute; right:20px;bottom: 20px;}
.mainmenu .itembox .itemtit .bi:before{font-size:50px}
.mainmenu .itembox .itemtit strong{color:#222; font-weight: 900;}
.mainmenu .itembox .itemtit span{display:block; font-size: 12px;}
.btn-tap{display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #888;
    font-weight: bold; position: relative;}
    .btn-tap.active{color:#222}
    .btn-tap.active:after{content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #222;
    position: absolute;
    bottom: 0;
    left: 0;}
    .new{padding:40px 100px}
@media screen and (max-width: 767px){
  .new{padding:40px 0}
  .pdttitle{font-size: 26px;}
  .pdttitle span{font-size: 14px;}
  .tap{margin:20px 0}
  .btn-tap{height:20px; line-height: 20px; font-size:14px;}
  .searcharea{margin:30px 0 20px; padding:20px 30px; }
  .searcharea .guidehash > span{font-size:12px;}
  .mainmenu .itembox{flex-basis:100%;}
  .mainmenu .itembox +.itembox {margin-top:20px; }
  .mainmenu, .noticebox{flex-wrap: wrap;}
  .noticebox .newsitem{padding:20px 30px; flex-shrink: 0; flex-basis: 100%;}
  .noticebox .newsitem +.newsitem{border-left:none; border-top:solid 1px #ddd; margin:0;}
  .noticebox .newsitem strong{font-size:16px;}
  .notice{margin:30px 0}

}
.autolayer{width:100%; height:auto;background:#fff; position: absolute; left:0; bottom:-180px; z-index: 99;}
.autolayer ul li{font-size:16px; padding:10px 30px; border-top:solid 1px #ddd; cursor:pointer;color:#888}
.autolayer ul li:hover{background-color:#ddd; color:#222}
</style>
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
      seacherkeyword:'',
      textvalue:'',
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
      booksname:[
        {cata:"html" , books:[
          {booktit:"웹사이트 따라 만들기" ,author:"김윤미"},
          {booktit:"html정석" ,author:"고경희"},
          {booktit:"html정석" ,author:"고경희"},
          {booktit:"웹사이트 따라 만들기" ,author:"김윤미"}
        ]},
        {cata:"vue" , books:[
          {booktit:"vue.js" ,author:"캡틴판교"},
          {booktit:"vue1" ,author:"고경희"},
          {booktit:"vue2" ,author:"고경희"},
          {booktit:"vue3" ,author:"김윤미"},
          {booktit:"vue3" ,author:"김윤미"}
        ]},
        {cata:"javascript" , books:[
          {booktit:"vue.js" ,author:"캡틴판교"},
          {booktit:"vue1" ,author:"고경희"},
          {booktit:"vue2" ,author:"고경희"},
          {booktit:"vue3" ,author:"김윤미"}
        ]}
      ],
      searchresult:false,
      catanum:null,
      more:false
    }
  },
  computed:{
    autocomplate(){
      this.booksname.map((item, index) => {
        if(item.cata.indexOf(this.seacherkeyword)> -1){
          this.catanum = index
        }
      })
      return this.seacherkeyword.length > 0 ? true : false
    }
  },
  methods:{
    autochange(text){
      console.log(text)
      this.seacherkeyword =text
      console.log(text)
      document.querySelector(".autolayer").style.display="none"
    },
    morenotice(){
      this.more = !this.more
    }
  }
}
</script>
