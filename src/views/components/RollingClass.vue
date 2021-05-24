<template>
  <section class="rolling-class">
    <h1 class="title link">
      <span>동영상 강의</span> 
      <pageBtn :link="'/movieclass'" :text="'more'" :class="'more'" />
    </h1>
    <button class="rollbt left"  @click="RollingClick('left', num)"></button>
    <button class="rollbt right" @click="RollingClick('right',num)"></button>
    <div class="class-con">
      <dl>
        <dt v-html="ClassLists[num].classname"></dt>
        <dd class="classimg"><img :src="ClassLists[num].classimg" :alt="ClassLists[num].imgalt"></dd>
        <dd class="review" v-html="ClassLists[num].summary"></dd>
      </dl>
    </div>
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
      num:0,
      ClassLists:[
        {classname:"동영상강의1", classimg:"/images/t08.jpg", imgalt:"동영상강의", summary:"얼마전 구매 했는데 너무 예쁘네요. 재구매 하고 싶어요 "},
        {classname:"동영상강의2", classimg:"/images/t07.jpg", imgalt:"동영상강의", summary:"얼마전 구매 했는데 너무 예쁘네요. 재구매 하고 싶어요 "},
        {classname:"동영상강의3", classimg:"/images/t03.jpg", imgalt:"동영상강의", summary:"얼마전 구매 했는데 너무 예쁘네요. 재구매 하고 싶어요 "}
      ]
    }
  },
  methods:{
    RollingClick:function(direction, num){
      let listnum =this.ClassLists.length -1
      if(direction == 'left'){
        if(num==0){
          this.num = listnum
        }else{
          this.num = num-1
        }
      }else if(direction == 'right'){
        if(num==listnum){
          this.num = 0
        }else{
          this.num = num+1
        }
      }
    }
  }
}
</script>