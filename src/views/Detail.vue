<template>
  <div class="detail">
    <div class="head animated rotateInDownRight">
      <div class="iconfont icon-chacha1" @click="$router.back(-1)"></div>
      <div class="name">歌单详情页</div>
    </div>
    <h3 class="animated rotateInDownLeft">歌单详情</h3>
    <div class="banner animated rotateInDownLeft">
      <div class="userImg">
        <img :src="musicList.coverImgUrl" alt />
      </div>
      <div class="description">
        <div class="nickname">
          <img :src="creator.avatarUrl" alt />
          <div>
            <div class="name">昵称: {{creator.nickname}}</div>
            <div class="signature">签名: {{creator.signature}}</div>
            <div class="tag">
              <ul>
                <li v-for="(item, i) in musicList.tags" :key="i">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="des">{{musicList.description}}</div>
      </div>
    </div>
    <div class="music">
      <div class="play animated fadeInRight" v-for="(item, i) in musicList.tracks" :key="i">
        <div class="alpci">
          <img :src="item.al.picUrl" alt />
          <span class="songName">{{item.name}}</span>
          <div class="iconfont icon-bofang3" @click="play(item.id)"></div>
        </div>
      </div>
    </div>
    <Player />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
import Player from "@/components/musicPlayer";
export default {
  name: "Detail",
  components: {
    Player
  },
  setup() {
    const state = reactive({
      id: "",
      musicList: [],
      creator: [],
      musicUrl: ""
    });
    onMounted(() => {
      listDetail(state);
    });
    let { play } = musicUrl(state);
    return {
      ...toRefs(state),
      play
    };
  }
};
// 获取详情列表
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
  if (res.status == "200") {
    state.musicList = res.data.playlist;
    state.creator = res.data.playlist.creator;
    // console.log(state.musicList);
  } else {
    console.log("获取数据错误");
  }
};
// 获取音乐播放地址
let musicUrl = state => {
  let play = id => {
    getUrl(id);
  };
  let store = useStore();
  let getUrl = async id => {
    let res = await axios({
      url: "https://autumnfish.cn//song/url",
      method: "get",
      params: {
        id
      }
    });
    if (res.status == "200" && res.data.data[0].url != "") {
      state.musicUrl = await res.data.data[0].url;
      store.state.musicUrl = state.musicUrl;
    } else {
      console.log("歌曲播放地址获取失败");
    }
  };
  return {
    play
  };
};
</script>

<style scoped lang='less'>
.detail {
  width: 100%;
  position: relative;
  .head {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
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
    display: flex;
    .userImg {
      width: 250px;
      height: 100%;
      margin: 15px;
      img {
        width: 250px;
        height: 100%;
        border-radius: 15px;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.5);
      }
    }
    .description {
      width: 100%;
      margin: 15px;
      box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.5);
      .nickname {
        display: flex;
        margin: 10px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 100%;
        }
        div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          margin-left: 20px;
          .name {
            margin: 5px;
          }
          .signature {
            margin: 5px;
          }
          .tag {
            ul {
              margin: 15px;
            }
          }
        }
      }
      .des {
        margin: 15px;
      }
    }
  }
  .music {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 60px;
    .play {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);
      margin: 2px;
      .alpci {
        width: 200px;
        height: 200px;
        margin: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .iconfont {
          display: none;
          font-size: 30px;
          color: #be002f;
          cursor: pointer;
        }
        img {
          width: 150px;
          height: 150px;
        }
        .songName {
          width: 100%;
          text-align: center;
          margin: 1px;
        }
      }
    }
    .play:hover .iconfont {
      display: block;
    }
  }
}

@media screen and (max-width: 600px) {
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
      display: flex;
      flex-direction: column;
      .userImg {
        width: 200px;
        height: 100%;
        img {
          width: 200px;
          height: 200px;
        }
      }
      .description {
        width: 92%;
        margin: 15px;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.5);
        .nickname {
          display: flex;
          margin: 10px;
          img {
            width: 100px;
            height: 100px;
            border-radius: 100%;
          }
          div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            margin-left: 20px;
            .name {
              margin: 5px;
            }
            .signature {
              margin: 5px;
            }
            .tag {
              ul {
                margin: 15px;
              }
            }
          }
        }
        .des {
          margin: 15px;
        }
      }
    }
    .music {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .play {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);
        margin: 2px;
        .alpci {
          width: 200px;
          height: 200px;
          margin: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .iconfont {
            display: none;
            font-size: 20px;
            color: #be002f;
            cursor: pointer;
          }
          img {
            width: 150px;
            height: 150px;
          }
          .songName {
            text-align: center;
            margin: 2px;
          }
        }
      }
      .play:hover .iconfont {
        display: block;
      }
    }
  }
}
</style>