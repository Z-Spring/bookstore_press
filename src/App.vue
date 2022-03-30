<script setup>
  import {test} from './base.js'
  import {ref} from 'vue'

  const s=ref(1)
  function changeText(){
    return s.value.value++;
  }
  test()
</script>

<template>
  <el-button @click="changeText">test</el-button>  
  <div>
    <h1>test</h1>
  </div>
</template>

<style>

</style>
