<template>
<div>
  <div class="pagenavigation">
    <div class="pagetit"><i class="bi bi-bookmark-check"></i>{{thispage}} </div>
    <div class="pagemap">
      <span><i class="bi bi-house-door"></i>홈</span>
      <span><i class="bi bi-slash"></i>{{thispage}}</span>
    </div>
  </div>
  <div class="subpageguide" v-if="pageguide.length > 0">
    {{pageguide}}
  </div>
</div>
</template>
<script>
export default {
  props:['thispage', 'link', 'pageguide']
}
</script>