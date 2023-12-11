let { createApp } = Vue;


createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imageLink: 'vuejs.png',
      }
    }
}).mount('#app');