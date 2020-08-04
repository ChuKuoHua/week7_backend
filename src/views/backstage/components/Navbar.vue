<template>
  <div class="navbar navbar-fixed-top d-flex justify-content-between">
    <div class="back-logo">
      <router-link to="/">logo</router-link>
    </div>
    <div class="back-menu">
      <a class="ml-3 ani" href="#" @click.prevent="signout">
        <span class="sign-span">登出</span>
        <font-awesome-icon :icon="['fa', 'sign-out-alt']" class="opt-signout-icon" size="lg"/>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      document.cookie = 'hexToken=; expires=; path=/';
      console.log('token 已清除');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss">
@mixin iconAnimate {
  position: absolute;
  top: 2px;
  transform: translateY(0px);
}
.back-logo{
  a{
    color: #fff;
    &:hover{
      text-decoration: none;
    }
  }
}
.back-menu{
  overflow: hidden;
  position: relative;
  padding: 5px 15px 5px 0;
  width: 100px;
  a{
    color: #fff;
    &:hover{
      color: #fff;
      text-decoration: none;
    }
  }
}
.ani{
  .home-span,
  .sign-span{
    position: absolute;
    display: none;
  }
  .home-span{
    left: 3px;
  }
  .sign-span{
    right: 19px;
  }
  .opt-home-icon,
  .opt-signout-icon{
    @include iconAnimate;
  }
  .opt-home-icon{
    left: 7px;
  }
  .opt-signout-icon{
    right: 21px;
  }
  &:hover{
    .home-span,
    .sign-span{
      display: block;
      font-weight: bold;
      font-family:Microsoft JhengHei;
    }
    .opt-home-icon,
    .opt-signout-icon{
      transform: translateY(-50px);
    }
  }
}
</style>
