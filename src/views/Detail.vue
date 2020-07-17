<template>
  <div class="detail">
    <div class="head">
      <div class="iconfont icon-chacha1"></div>
      <div class="name">歌单详情页</div>
    </div>
    <h3>歌单详情</h3>
    <div class="banner">
      <!-- <img :src="musicList.creator.avatarUrl" alt=""> -->
      <div class="userImg">
        <img :src="musicList.coverImgUrl" alt />
      </div>
      <div class="description">
        <p>{{musicList.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "Detail",
  setup() {
    const state = reactive({
      id: "",
      musicList: []
    });
    onMounted(() => {
      listDetail(state);
    });

    return {
      ...toRefs(state)
    };
  }
};

let listDetail = async state => {
  const router = useRouter();
  state.id = await router.currentRoute.value.params.id;
  let res = await axios({
    url: "https://autumnfish.cn//playlist/detail",
    method: "get",
    params: {
      id: state.id
    }
  });
  state.musicList = res.data.playlist;
  console.log(state.musicList)
};
</script>

<style scoped lang='less'>
.detail {
  width: 100%;
  .head {
    width: 100%;
    height: 50px;
    background-color: #44cef6;
    display: flex;
    justify-content: center;
    align-items: center;
    .name {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
    }
    .iconfont {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ff0097;
      font-size: 30px;
      cursor: pointer;
      margin-left: 15px;
    }
    .iconfont:hover {
      color: #f20c00;
    }
  }
  h3 {
    margin: 15px;
    color: #0eb83a;
  }
  .banner {
    width: 100%;
    height: 250px;
    display: flex;
    .userImg {
      width: 20%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>