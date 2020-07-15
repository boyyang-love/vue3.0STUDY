<template>
  <div class="login">
    <Header :mes="state" class="animated bounceInLeft" id="dowebok" />
  </div>
</template>

<script>
import Header from "@/components/head/header.vue";
import { reactive } from "vue";
export default {
  name: "Login",
  components: {
    Header
  },
  setup() {
    const state = reactive({
      name: "登录页面",
      status: ["无账号", "注册", "register"]
    });

    return {
      state
    };
  }
};
</script>

<style scoped lang='less'>
</style>