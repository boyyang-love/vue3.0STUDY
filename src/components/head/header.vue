<template>
  <div class="header">
    <div class="head">
      <div class="back">
        <p class="iconfont icon-ai214" @click="$router.back(1)"></p>
      </div>
      <p>{{props.mes.name}}</p>
      <p>
        {{props.mes.status[0]}}，
        <span class="login" @click="change">{{props.mes.status[1]}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Header",
  props: {
    mes: Object
  },
  setup(props) {
    const { change } = routerJumb(props);
    return {
      props,
      change
    };
  }
};
// 路由跳转
const routerJumb = props => {
  let router = useRouter();
  let change = () => {
    router.push(props.mes.status[2]);
  };

  return { change };
};
</script>

<style scoped lang='less'>
.header {
  .head {
    width: 100%;
    height: 80px;
    background-color: #1f3134;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .back {
      .iconfont {
        font-size: 35px;
        cursor: pointer;
      }
      .iconfont:hover {
        color: #ee827c;
      }
    }
    p {
      margin: 0 25px;
      span {
        cursor: pointer;
      }
      span:hover {
        color: red;
      }
    }
  }
}
</style>