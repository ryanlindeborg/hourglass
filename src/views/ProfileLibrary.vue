<template>
  <div>
    <h1>Profile Library</h1>
    <section v-for="profilePreview in profilePreviews" :key="profilePreview.user">
      <ProfileCard :profilePreview="profilePreview"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import ProfileCard from '../components/ProfileCard.vue';

export default {
  data() {
    return {
      profilePreviews: '',
    };
  },
  created() {
    // TODO: Fetch list of users to display
    // think about whether want separate json object to call or if can just call from profilejson
    // and not use extra information
  },
};
</script>

<style scoped>
</style>
