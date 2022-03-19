<script setup>
  import {test} from './base.js'
  import {ref} from 'vue'

  let s=ref(1)
  function changeText(){
    return s.value++;
  }
  test()
</script>

<template>
  <h1>{{s}}</h1>
  <el-button @click="changeText">test</el-button>  
</template>

<style>

</style>
