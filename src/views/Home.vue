<template>
  <div class="home">
    <Header />
    <section class="splash">test text</section>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
  },
};
</script>
