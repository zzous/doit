<template>
  <div class="subpage">
    <ContentBox>
      <subpageTitle :thispage="'자료실'" :pageguide="'대학 또는 학원, 문화센터 선생님 중 이지스퍼블리싱 도서를 교재로 채택하고 싶으신 분들은 아래 내용을 접수해 주시기 바랍니다.'"/>
      <div class="formpage">
        <ul>
          <li>
            <div class="formbox">
            <label for="book">요청도서</label>
            <b-form-input id="book" />
            </div>
            <div class="guidetext">도서명을 확인 후 정확하게 입력해 주세요</div>
          </li>
          <li>
            <div class="formbox">
            <label for="publicname">기관이름</label>
            <b-form-input id="publicname" />
            </div>
            <div class="guidetext">기관이름을 정확하게 입력해 주세요</div>
          </li>
          <li>
            <div class="formbox">
            <label for="class">학과/과정</label>
            <b-form-input id="class" />
            </div>
            <div class="guidetext">요청이 필요한 학과/과정을 입력주세요</div>
          </li>
          <li>
            <div class="formbox">
            <label for="name">이름</label>
            <b-form-input id="name" />
            </div>
          </li>
          <li>
            <div class="formbox">
            <label for="cell">연락처</label>
            <b-form-input id="cell" />
            </div>
            <div class="guidetext">연락이 가능한 번호를 입력 주세요</div>
          </li>
          <li>
            <div class="formbox">
            <label for="email">이메일</label>
            <b-form-input id="email" />
            </div>
            <div class="guidetext">연락이 가능한 이메일을 입력 주세요</div>
          </li>
          <li>
            <div class="formbox">
            <label for="textarea">추가 요청 및 <br />건의사항</label>
            <b-form-textarea id="textarea" />
            </div>
            <div class="guidetext">요청사항을 작성해 주세요</div>
          </li>
          <li>
            <div class="formbox">
            <label for="type">신청유형</label>
            <b-form-checkbox-group
              id="type"
              :options="options"
              v-model="typecheck"
            />
            </div>
          </li>
        </ul>
        <div class="btnwrap half">
          <b-button variant="login">확인</b-button>
          <b-button variant="login cancel">취소</b-button>
        </div>
      </div>
    </ContentBox>
  </div>
</template>
<script>
import ContentBox from "../../components/ContentBox.vue"
import subpageTitle from '../components/subpageTitle.vue'
export default {
  components:{
    ContentBox,
    subpageTitle
  },
  data(){
    return{
      typecheck:['a'],
      options:[
        {text:"종이책", value:'a'},
        {text:"전자책", value:'b'},
        {text:"강의자료", value:'c'},
      ]
    }
  }
}
</script>