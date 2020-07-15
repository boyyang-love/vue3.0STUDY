<template>
  <div class="register">
    <Header :mes="state" class="animated swing" id="dowebok" />
    <Signup />
  </div>
</template>

<script>
import Header from "@/components/head/header.vue";
import Signup from "@/components/signup";
import { reactive } from "vue";
export default {
  name: "Register",
  components: {
    Header,
    Signup
  },
  setup() {
    const state = reactive({
      name: "注册页面",
      status: ["有账号", "登录", "login"]
    });

    return {
      state
    };
  }
};
</script>

<style scoped lang='less'>
</style>