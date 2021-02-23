<template>
  <header :class="Topclass">
		<div class="topmenu">
			<ContentBox>
				<div class="logo">
          <pageBtn :link="'/main'">
            <span><img src="/images/logo.png" /></span>
          </pageBtn>
				</div>	
				<div class="system">
          <b-button @click="$bvModal.show('bv-modal-login')">로그인</b-button>
          <b-button @click="$bvModal.show('bv-modal-member')">회원가입</b-button>
				</div>
		  </ContentBox>
    </div>
		<nav> 
			<div class="content-box">
				<ul>
          <li v-for="(item, index) in menus" :key="index">
            <pageBtn :link="item.link" :text="item.menutext" />
          </li>
        </ul>
			</div>
		</nav>
    <!-- 로그인 모달 -->
    <b-modal id="bv-modal-login" hide-footer>
      <template #modal-title>
        <i class="bi bi-clipboard-check bi-red" />
        로그인
      </template>
      <div class="modalcontainer">
        <div class="loginform">
          <label for="id"><i class="bi bi-file-person " />아이디</label>
          <b-form-input id="id" placeholder="아이디를 입력해 주세요" />
          <label for="pass"><i class="bi bi-lock" />패스워드</label>
          <b-form-input type="password" id="pass" placeholder="패스워드를 입력해 주세요"/>
        </div>
        <div class="btnwrap">
          <b-button variant="login"  @click="$bvModal.hide('bv-modal-login')">로그인</b-button>
        </div>
      </div>
    </b-modal>
    <!-- 회원가입 모달 -->
    <b-modal id="bv-modal-member" hide-footer>
      <template #modal-title>
        <i class="bi bi-clipboard-check bi-red" />
        회원가입
      </template>
      <div class="modalcontainer">
        <div class="memberform">
          <ul>
            <li class="btninput">
              <label for="id"><i class="bi bi-file-person " />아이디</label>
              <b-form-input id="id" placeholder="아이디를 입력해 주세요" />
              <b-button variant="confirm">중복확인</b-button>
              <div class="guidetext">4 ~ 15자리 이내의 영문과 숫자로만 입력 하세요</div>
            </li>
            <li>
              <label for="pass"><i class="bi bi-lock" />패스워드</label>
              <b-form-input type="password" id="pass" placeholder="패스워드를 입력해 주세요"/>
              <div class="guidetext">8자리 이상의 영문과 숫자로만 입력 하세요</div>
            </li>
            <li>
              <label for="mail"><i class="bi bi-sticky" />이지스퍼블리싱 메일링 수신</label>
              <b-form-radio-group 
                v-model="selected"
                :options="options"
                class="radiobox"
                id="mail"
              />
              <div class="guidetext">※ 메일링 수신을 허락하시면 이지스퍼블리싱의 IT 신간 소식과 무료 전자책, 이벤트 소식, 독자 혜택을 받으실 수 있습니다.</div>
            </li>
            <li>
              <label for="pass"><i class="bi bi-tag" />관심 분야 선택</label>
              <b-form-checkbox-group
                :options="options1"
                class="radiobox"
              />
              <div class="guidetext">※ 관심분야를 선택하세요. 2개 이상 선택이 가능합니다.</div>
            </li>
          </ul>
        </div>
        <div class="btnwrap half">
          <b-button variant="login"  @click="$bvModal.hide('bv-modal-member')">회원가입</b-button>
          <b-button variant="login cancel"  @click="$bvModal.hide('bv-modal-member')">취소</b-button>
        </div>
      </div>
    </b-modal>
    
	</header>
</template>
<script>
  import ContentBox from "../../../components/ContentBox.vue"
  import pageBtn from "../../../components/pageBtn.vue"
  export default {
    components:{
      ContentBox,
      pageBtn
    },
    data(){
      return{
        menus:[
          {menutext:'도서', link:'/book'},
          {menutext:'자료실', link:'/reference'},
          {menutext:'동영상강의', link:'/movieclass'},
          {menutext:'교재샘플', link:'/classsample'},
          {menutext:'회사소개', link:'/company'},
        ],
        selected:"Y",
        options:[
          {text:"예", value:"Y"},
          {text:"아니오", value:"N"},
        ],
        selected1:['html'],
        options1:[
          {text:"HTML/CSS", value:'html'},
          {text:"자바스크립트", value:"javascript"},
          {text:"파이썬", value:"python"},
          {text:"Vue.js", value:"vue"},
          {text:"앵귤러", value:"angular"},
          {text:"리액트", value:"react"},
          {text:"자료구조/알고리즘", value:"data"},
          {text:"오토캐드", value:"cad"},
        ],
        Topclass:"",
        ScTop:0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestory() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      //스크롤 동작 
      handleScroll(){
        const scrollTop = window.pageYOffset
        const headerTop =document.querySelector('header').clientHeight
        if(scrollTop<headerTop){
          this.Topclass=""
        }else{
          //console.log('down')
          this.Topclass="scrollTop"
        }
      },
    }
  }
</script>
