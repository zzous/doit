(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fff83e0a"],{"07fd":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"subpage"},[e("div",{staticClass:"contentbox"},[e("div",{staticClass:"titlebar"},[e("h1",[e("i",{staticClass:"bi bi-bookmark-check"}),t._v(" "+t._s(t.patetit))]),e("div",{staticClass:"pagenavi"},[t._m(0),e("strong",[t._v(t._s(t.patetit))])])]),t._t("default")],2)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("i",{staticClass:"bi bi-house-door"}),t._v("홈")])}],n={name:"Subpage",props:["patetit"]},l=n,r=e("2877"),o=Object(r["a"])(l,s,i,!1,null,null,null);a["a"]=o.exports},"8bf3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Subpage",{attrs:{patetit:"도서"}},[e("div",{staticClass:"bookpage"},[e("VueSlickCarousel",t._b({ref:"carousel",staticClass:"subpageslider",on:{init:t.handleInit}},"VueSlickCarousel",t.settings,!1),t._l(t.Newbooks,(function(a,s){return e("div",{key:s,staticClass:"rollimg",class:{active:s==t.tabIndex},on:{click:function(a){return t.Clicklink(s)}}},[e("span",{staticClass:"imgbox"},[e("img",{attrs:{src:a.imgurl}})]),e("strong",{domProps:{innerHTML:t._s(a.name)}}),e("span",{staticClass:"textbox",domProps:{innerHTML:t._s(a.subdec)}})])})),0),e(t.componentslist[t.tabIndex],{tag:"component"})],1)])},i=[],n=(e("a9e3"),e("07fd")),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"bookdetail"},[t._m(0),e("div",{staticClass:"book-info"},[e("div",{staticClass:"imgview"},[t._m(1),e("div",{staticClass:"bookbtns"},[e("b-button",{attrs:{variant:"lightgray"}},[e("i",{staticClass:"bi bi-search"}),t._v("책 미리보기")]),e("b-button",{attrs:{variant:"lightgray"}},[e("i",{staticClass:"bi bi-hdd"}),t._v("전자책")])],1)]),e("div",{staticClass:"infolist"},[e("ul",t._l(t.bookinfolists,(function(a,s){return e("li",{key:s},[e("span",{staticClass:"label",domProps:{innerHTML:t._s(a.label)}}),e("span",{staticClass:"infocontent",domProps:{innerHTML:t._s(a.content)}})])})),0)])]),e("div",{staticClass:"book-detailinfo"},[e("div",{staticClass:"detailTap"},[e("b-form-radio",{attrs:{name:"detail-tap",value:"introduce",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-mic"}),t._v(" 책소개")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"review",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-chat-left-text"}),t._v(" 출판사리뷰")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"order",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-layout-text-sidebar-reverse"}),t._v("목차")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"write",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-journal-text"}),t._v(" 저자소개")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"recommendation",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-person-check"}),t._v("추천의글")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"reference",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-inboxes"}),t._v("자료실")])],1),"introduce"==t.tapselect?[t._m(2)]:"review"==t.tapselect?[t._m(3)]:"order"==t.tapselect?[t._m(4)]:"write"==t.tapselect?[t._m(5)]:"recommendation"==t.tapselect?[t._m(6)]:"reference"==t.tapselect?[t._m(7)]:t._e()],2)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"booktitle"},[t._v(" Do it! 웹 사이트 따라 만들기 "),e("span",[t._v("HTML, CSS, 자바스크립트, jQuery, Ajax로 웹 퍼블리싱")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imgbook"},[e("img",{attrs:{src:"/images/t03.jpg",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("를 소개 합니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("출판사 리뷰 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("목차 입니다..")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("저자소개 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("자료실 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("자료실 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])}],o={name:"BookDetail1",data:function(){return{bookinfolists:[{label:"저 자",content:"김윤미"},{label:"발행일",content:"2019-12-05"},{label:"사 양",content:"312쪽 | 188*257mm"},{label:"I S B N",content:"979-11-6303-124-6 15000"},{label:"포맷/용량PDF",content:"PDF | 77MB"},{label:"정 가",content:"11,000 원"},{label:"상 태",content:"정상 판매중"}],tapselect:"introduce"}}},c=o,v=e("2877"),b=Object(v["a"])(c,l,r,!1,null,null,null),_=b.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"bookdetail"},[t._m(0),e("div",{staticClass:"book-info"},[e("div",{staticClass:"imgview"},[t._m(1),e("div",{staticClass:"bookbtns"},[e("b-button",{attrs:{variant:"lightgray"}},[e("i",{staticClass:"bi bi-search"}),t._v("책 미리보기")]),e("b-button",{attrs:{variant:"lightgray"}},[e("i",{staticClass:"bi bi-hdd"}),t._v("전자책")])],1)]),e("div",{staticClass:"infolist"},[e("ul",t._l(t.bookinfolists,(function(a,s){return e("li",{key:s},[e("span",{staticClass:"label",domProps:{innerHTML:t._s(a.label)}}),e("span",{staticClass:"infocontent",domProps:{innerHTML:t._s(a.content)}})])})),0)])]),e("div",{staticClass:"book-detailinfo"},[e("div",{staticClass:"detailTap"},[e("b-form-radio",{attrs:{name:"detail-tap",value:"introduce",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-mic"}),t._v(" 책소개")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"review",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-chat-left-text"}),t._v(" 출판사리뷰")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"order",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-layout-text-sidebar-reverse"}),t._v("목차")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"write",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-journal-text"}),t._v(" 저자소개")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"recommendation",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-person-check"}),t._v("추천의글")]),e("b-form-radio",{attrs:{name:"detail-tap",value:"reference",button:"","button-variant":"detailtap"},model:{value:t.tapselect,callback:function(a){t.tapselect=a},expression:"tapselect"}},[e("i",{staticClass:"bi bi-inboxes"}),t._v("자료실")])],1),"introduce"==t.tapselect?[t._m(2)]:"review"==t.tapselect?[t._m(3)]:"order"==t.tapselect?[t._m(4)]:"write"==t.tapselect?[t._m(5)]:"recommendation"==t.tapselect?[t._m(6)]:"reference"==t.tapselect?[t._m(7)]:t._e()],2)])},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"booktitle"},[t._v(" Do it! 웹 사이트 따라 만들기1 "),e("span",[t._v("HTML, CSS, 자바스크립트, jQuery, Ajax로 웹 퍼블리싱")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imgbook"},[e("img",{attrs:{src:"/images/t03.jpg",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("를 소개 합니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("출판사 리뷰 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("목차 입니다..")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("저자소개 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("자료실 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detailTapCon"},[e("h1",{staticClass:"tapcontit"},[e("strong",[t._v('"Do it! 웹 사이트 따라 만들기"')]),t._v("자료실 입니다.")]),e("p",[t._v(" 웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로"),e("br"),t._v(" 웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!"),e("br"),t._v(" 이 책 한권이면 웹 사이트 하나가 뚝딱 완성 ")]),e("p",[t._v(" 이런분께 권해 드려요 - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자"),e("br"),t._v(" - 웹 퍼블리셔가 되고 싶은 취업 준비생"),e("br"),t._v(" - 실무에 익숙하지 않은 신입 웹 퍼블리셔"),e("br"),t._v(" - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자"),e("br"),t._v(" - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자 ")])])}],m={name:"BookDetail1",data:function(){return{bookinfolists:[{label:"저 자",content:"김윤미"},{label:"발행일",content:"2019-12-05"},{label:"사 양",content:"312쪽 | 188*257mm"},{label:"I S B N",content:"979-11-6303-124-6 15000"},{label:"포맷/용량PDF",content:"PDF | 77MB"},{label:"정 가",content:"11,000 원"},{label:"상 태",content:"정상 판매중"}],tapselect:"introduce"}}},d=m,f=Object(v["a"])(d,p,u,!1,null,null,null),C=f.exports,g={components:{Subpage:n["a"],BookDetail1:_},data:function(){return{settings:{slidesToShow:8,arrows:!0,dots:!1,infinite:!0,responsive:[{breakpoint:1023,settings:{slidesToShow:5}},{breakpoint:767,settings:{slidesToShow:2}}]},Newbooks:[{imgurl:"/images/t01.jpg",name:"4도서명"},{imgurl:"/images/t03.jpg",name:"도서명"},{imgurl:"/images/t04.jpg",name:"도서명"},{imgurl:"/images/t05.jpg",name:"도서명"},{imgurl:"/images/t06.jpg",name:"도서명"},{imgurl:"/images/t07.jpg",name:"도서명"},{imgurl:"/images/t08.jpg",name:"도서명"},{imgurl:"/images/t01.jpg",name:"4도서명"},{imgurl:"/images/t03.jpg",name:"도서명"},{imgurl:"/images/t04.jpg",name:"도서명"},{imgurl:"/images/t05.jpg",name:"도서명"},{imgurl:"/images/t06.jpg",name:"도서명"},{imgurl:"/images/t07.jpg",name:"도서명"},{imgurl:"/images/t08.jpg",name:"도서명"}],componentslist:[_,C],tabIndex:0}},methods:{Clicklink:function(t){if(this.$route.query.tabId!=t)return this.tabIndex=t,this.$router.push("/book?tabId="+t)},handleInit:function(){var t=this;this.$nextTick((function(){t.$refs.carousel.goTo(t.tabIndex)}))}},created:function(){"undefined"==typeof this.$route.query.tabId?this.tabIndex=0:this.tabIndex=Number(this.$route.query.tabId)}},h=g,k=Object(v["a"])(h,s,i,!1,null,null,null);a["default"]=k.exports}}]);
//# sourceMappingURL=chunk-fff83e0a.03730ffb.js.map