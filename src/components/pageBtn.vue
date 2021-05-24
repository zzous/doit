<template>
  <button @click="goToPage(link)" :class="classname" >
    {{text}}
    <slot></slot>
  </button>
</template>
<script>
export default {
  props:['link', 'classname', 'text'],
  methods:{
    goToPage:function(target) {
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target)
      }
    }
  }
}
</script>