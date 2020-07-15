<template>
  <div class="home">
    <h1>this is home</h1>
    <h2>{{mes}}</h2>
    <div v-for="(item, i) in state" :key="i">{{item}}</div>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    let mes = ref(100);
    const state = reactive({
      name: "boyyang",
      sex: "boy"
    });

    const add = () => {
      mes.value++;
      state.name = 'i love you'
    };

    return {
      mes,
      state,
      add
    };
  }

};
</script>

<style scoped>
</style>