<template>
  <div id="app">
    <h1>less换肤方案3</h1>
    <button class="btn" @click="setBlackTheme(false)">白色皮肤</button>
    <button class="btn" @click="setBlackTheme(true)">黑色皮肤</button>
  </div>
</template>

<script>
export default {
  methods: {
    setBlackTheme(flag) {
      document.querySelectorAll('link').forEach(tag => {
        let tagName = tag.href.split('/').pop();
        if (tagName.startsWith('white')) {
          if (flag) {
            tag.setAttribute('disabled', 'disabled');
          } else {  
            tag.removeAttribute('disabled');
          }
        }
      })
    }
  }
}
</script>
