<script setup >
import {ref,reactive,watch,watchEffect,onMounted,onUpdated } from 'vue'
const num1 = ref(1)
const num2 = ref(2)
const arr = reactive([1,2,4])
watch([num1,num2],(newValue)=>{
  console.log('watch')
})
watchEffect(()=>{
  console.log('dd')
})

// console.log('created')
onMounted(() => {
  // console.log('某男贴的')
})
onUpdated(() => {
  // console.log('数据更新了')
}),
// console.log('===========',this.num1)
setTimeout(()=>{
  num1.value=99
},1000)
</script>

<template>
 <!-- <p>{{num1}}</p> -->
 <p>{{num2}}</p>
 <!-- <p>{{arr}}</p> -->
</template>

<style scoped>

</style>
