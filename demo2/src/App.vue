<template>
  <div id="app" :class="['application', drak?'theme-dark':'theme-light']">
    <h1>less换肤方案2</h1>
    <button class="btn" @click="drak=false">白色皮肤</button>
    <button class="btn" @click="drak=true">黑色皮肤</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      drak: false
    }
  }
}
</script>
