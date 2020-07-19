<template>
  <div class="music">
    <Head class="animated rollIn" />
    <div class="playlist">
      <div class="musicBox animated rotateInUpLeft" v-for="(item, i) in playlists" :key="i">
        <img :src="item.coverImgUrl" alt />
        <div class="iconfont icon-bofang1" @click="detail(item.id)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/head";
import axios from "axios";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Music",
  components: {
    Head
  },
  setup() {
    const state = reactive({
      playlists: []
    });

    onMounted(() => {
      getListData(state);
    });
    // 详情页
    const router = useRouter();
    const detail = id => {
      // console.log(id);
      router.push({
        name: "Detail",
        params: {
          id
        }
      });
    };
    return {
      ...toRefs(state),
      detail
    };
  }
};
// 获取歌单列表
const getListData = async state => {
  const res = await axios({
    url: "https://autumnfish.cn//top/playlist",
    method: "get"
  });

  if (res.status == "200") {
    // console.log(res);
    state.playlists = res.data.playlists;
  } else {
    console.log("获取失败");
  }
};
</script>

<style scoped lang='less'>
.music {
  .playlist {
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .musicBox:hover .iconfont {
      display: block;
    }
    .musicBox {
      width: 15%;
      margin: 10px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      .iconfont {
        display: none;
        font-size: 40px;
        color: red;
        position: absolute;
        margin: 0 auto;
        cursor: pointer;
      }
      .name {
        width: 100%;
        height: 16px;
        text-overflow: ellipsis;
        padding: 2px;
        margin: 10px 0px;
      }
      img {
        border-radius: 15px;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.8);
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .music {
    .playlist {
      width: 100%;
      margin-top: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .musicBox {
        width: 20%;
        margin: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .iconfont {
          display: block;
          font-size: 40px;
          color: red;
          position: absolute;
          margin: 0 auto;
        }
        .name {
          padding: 2px;
          font-size: 12px;
        }
        img {
          border-radius: 10px;
          width: 100%;
        }
      }
    }
  }
}
</style>