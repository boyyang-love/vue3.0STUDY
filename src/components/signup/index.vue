<template>
  <div class="signup">
    <div class="content animated bounceInLeft">
      <div class="nickname">
        <span>昵称:</span>
        <input type="text" v-model="userInput.nickname" required placeholder="2~6位的中文" />
        <span class="iconfont icon-xuanzhong1" v-show="Reg_nickname.test(userInput.nickname)"></span>
      </div>
      <div class="email">
        <span>邮箱:</span>
        <input type="email" v-model="userInput.email" required placeholder="邮箱地址" />
        <span class="iconfont icon-xuanzhong1" v-show="Reg_email.test(userInput.email)"></span>
      </div>
      <div class="password">
        <span>密码:</span>
        <input type="password" v-model="userInput.password" required placeholder="6~12位任意字符" />
        <span
          class="iconfont icon-xuanzhong1"
          v-show="Reg_password.test(userInput.password) && userInput.password == userInput.repassword"
        ></span>
      </div>
      <div class="repassword">
        <span>确认密码:</span>
        <input type="password" v-model="userInput.repassword" required placeholder="确认密码" />
        <span
          class="iconfont icon-xuanzhong1"
          v-show="Reg_password.test(userInput.password) && userInput.password == userInput.repassword"
        ></span>
      </div>
      <div class="btn">
        <span></span>
        <button @click="submit" :disabled="userInput.disabled">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Signup",
  setup() {
    let {
      submit,
      userInput,
      Reg_nickname,
      Reg_email,
      Reg_password
    } = formSubmit();
    return {
      submit,
      userInput,
      Reg_nickname,
      Reg_email,
      Reg_password
    };
  }
};

const formSubmit = () => {
  let userInput = reactive({
    nickname: "",
    email: "",
    password: "",
    repassword: "",
    disabled: false
  });
  // 昵称验证
  var Reg_nickname = /^[\u4e00-\u9fa5]{2,6}$/;
  // 邮箱验证
  var Reg_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  // 6~12位任意字符
  var Reg_password = /^.{6,12}$/;

  // 路由
  const router = useRouter();
  const submit = () => {
    // 验证通过后才能执行提交
    if (
      Reg_nickname.test(userInput.nickname) &&
      Reg_email.test(userInput.email) &&
      Reg_password.test(userInput.password) &&
      userInput.password == userInput.repassword
    ) {
      console.log("ok");
      console.log(userInput);
      alert("注册成功");
      setTimeout(() => {
        router.push("login");
      }, 1000);
    } else {
      alert("输入有误！");
    }
  };
  return {
    userInput,
    submit,
    Reg_nickname,
    Reg_email,
    Reg_password
  };
};
</script>

<style scoped lang='less'>
.signup {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .content {
    width: 100%;
    height: 500px;
    background-color: #1685a9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 45%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      span {
        text-align: center;
        font-size: 18px;
        line-height: 18px;
      }
      .iconfont {
        position: absolute;
        right: 3px;
        color: green;
      }
      input {
        width: 70%;
        height: 75%;
      }
    }
    .btn {
      margin: 25px 0;
      button {
        height: 95%;
        width: 45%;
        background-color: #ffa631;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .signup {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    .content {
      width: 100%;
      height: 500px;
      background-color: #1685a9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      div {
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          text-align: center;
          font-size: 18px;
          line-height: 18px;
        }
        input {
          width: 70%;
          height: 75%;
        }
      }
    }
  }
}
</style>