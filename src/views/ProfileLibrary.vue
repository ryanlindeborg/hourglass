<template>
  <section class="profile-library">
    <h1>Profile Library</h1>
    <div>
      <section v-for="profilePreview in profilePreviews" :key="profilePreview.userJson.id">
        <ProfileCard :profile-preview="profilePreview" class="profile-card-container" />
      </section>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ProfileCard from '../components/ProfileCard.vue';

export default {
  components: { ProfileCard },
  data() {
    return {
      profilePreviews: '',
    };
  },
  created() {
    // Fetch profile previews to pass in as props
    axios.get(`${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1/profile/previews`)
      .then((res) => {
        const { data } = res;
        this.profilePreviews = data;
      });
  },
};
</script>

<style scoped>
  section.profile-library { margin: 4vw; }
  section.profile-library h1 { margin-bottom: 1em; }
  section.profile-library div { display: flex; justify-content: center; flex-wrap: wrap; }
  section.profile-library section { display: inline-block; vertical-align: top; }
  .profile-card-container { margin: 1em; }
  .profile-card-container:hover { cursor: pointer; display: inline-block; }
</style>
