<template>
  <section class="subpage">
    <div class="contentbox">
      <div class="titlebar">
        <h1><i class="bi bi-bookmark-check"></i> {{patetit}}</h1>
        <div class="pagenavi">
          <span><i class="bi bi-house-door"></i>홈</span>
          <strong>{{patetit}}</strong>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name:"Subpage",
  props:['patetit']
}
</script>