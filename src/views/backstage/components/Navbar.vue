<template>
  <div class="navbar navbar-fixed-top fixed-top d-flex justify-content-between">
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
      this.$router.push('/login');
    },
  },
};
</script>
