<template>
  <section class="similar-profile">
    <img src="/images/RL-headshot-square.png" :alt="userFullName" />
  </section>
</template>

<script>
export default {
  props: ['similarProfile'],
  data() {
    return {
      userFullName: '',
    };
  },
};
</script>

<style scoped></style>
