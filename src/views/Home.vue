<template>
  <div class="home">
    <section class="splash">
      <h1>Seize your next career opportunity, and learn from those who have done it before you</h1>
    </section>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
  section.splash { background-image: linear-gradient(to bottom right, #87cafa, #1167b1);
    padding: 2em 0; height: 50vh; display: flex; flex-direction: column; justify-content: center; }
  h1 { color: white; text-align: center; font-weight: 600; font-style: italic; width: 70%;
    margin: auto; }
</style>
