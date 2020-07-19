<template>
  <div class="player">
    <audio :src="musicUrl" autoplay controls class="animated bounceInUp"></audio>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Player",
  setup() {
    const state = reactive({
      musicUrl: ""
    });
    const store = useStore();
    state.musicUrl = computed(() => {
      return store.state.musicUrl;
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style scoped lang='less'>
.player {
  width: 100%;
  height: 60px;
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  audio {
    width: 100%;
    height: 45px;
  }
}
</style>