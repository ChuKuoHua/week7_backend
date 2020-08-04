<template>
  <div class="top">
    <a href="#" @click.prevent="scrollTop">
      <font-awesome-icon :icon="['fa', 'angle-double-up']"/>
    </a>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    scrollTop() {
      $('html ,body').animate({
        scrollTop: 0,
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
$org: #e89666;
$gray: #f8f9fa;
.top {
  display: none;
  z-index: 220;
  a{
    padding: 8px;
    box-shadow: 0 0 3px #6f6666;
    border-radius: 50%;
    color: $gray;
    background: $org;
    text-decoration: none;
    &:hover{
      background: $gray;
      color: $org;
      box-shadow: 0 1px 8px #655f5f;
    }
  }
}
</style>
