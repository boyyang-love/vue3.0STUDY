<template>
  <div class="head">
    <div class="log">
      <p @click="routeTo('/')">boyyang</p>
    </div>
    <div class="login">
      <p @click="routeTo('music')">Music</p>
      <p>About</p>
      <p @click="$router.push('register')">Sign up</p>
      <p @click="routeTo('login')">Log in</p>
    </div>
    <div class="menu">
      <p class="iconfont icon-caidan1" @click="menu"></p>
    </div>
    <div class="menuBar animated bounce" v-show="state.isShow" id="dowebok">
      <p class="iconfont icon-chacha" @click="closeMenu"></p>
      <ul>
        <li @click="routeTo('register')">Sign up</li>
        <li @click="routeTo('login')">Log in</li>
        <li @click="routeTo('music')">Music</li>
        <li>About</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Head",
  setup() {
    const state = reactive({
      isShow: false
    });

    const { routeTo } = routerJump();
    const { menu, closeMenu } = Menu(state);

    return {
      state,
      menu,
      closeMenu,
      routeTo
    };
  }
};
// menu开关
const Menu = state => {
  let menu = () => {
    state.isShow = true;
  };

  let closeMenu = () => {
    state.isShow = false;
  };

  return {
    menu,
    closeMenu
  };
};

// 路由跳转
const routerJump = () => {
  const router = useRouter();
  const routeTo = path => {
    router.push(path);
  };

  return {
    routeTo
  };
};
</script>

<style scoped lang='less'>
.active {
  color: brown;
}
.head {
  z-index: 10;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(72, 126, 99, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  .log {
    p {
      font-size: 32px;
      font-weight: bold;
      cursor: pointer;
      margin: 15px;
    }
  }
  .login {
    display: flex;
    .iconfont {
      font-size: 30px;
    }
    p {
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      height: 80px;
      margin: 0 25px;
      line-height: 80px;
    }
    p:hover {
      color: #00adb5;
      cursor: pointer;
    }
  }
  .menu {
    display: none;
    p {
      cursor: pointer;
    }
  }
  .menuBar {
    position: absolute;
    top: 0px;
    right: 0;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    background: #373b44;
    background: linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244));
    .iconfont {
      cursor: pointer;
      font-size: 30px;
      color: white;
    }
    p {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    p:hover {
      color: red;
    }
    ul {
      list-style: none;
      width: 300px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      li {
        cursor: pointer;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: white;
      }
      li:hover {
        background-color: #00a497;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .head {
    background: #373b44;
    background: linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244));
    .log {
      color: white;
      p {
        font-size: 16px;
        margin: 0 35px;
      }
    }
    .login {
      display: none;
    }
    .menu {
      width: 100px;
      height: 80px;
      color: white;
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont {
        font-size: 32px;
      }
    }
  }
}
@media screen and (min-width: 900px) {
  .menuBar {
    display: none;
  }
}
</style>