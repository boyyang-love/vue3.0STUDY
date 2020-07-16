<template>
  <div class="signup">
    <div class="content animated bounceInLeft">
      <div class="nickname">
        <span>昵称:</span>
        <input type="text" placeholder="请输入昵称" />
      </div>
      <div class="password">
        <span>密码:</span>
        <input type="password" placeholder="请输入密码" />
      </div>
      <div class="btn">
        <span></span>
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup"
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