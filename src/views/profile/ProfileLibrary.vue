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
import apiClient from '../../services/apiClient';
import ProfileCard from '../../components/profile/ProfileCard.vue';
import { user, currentJob } from '../../services/defaultObjects';

export default {
  components: { ProfileCard },
  data() {
    return {
      profilePreviews: {
        userJson: user,
        currentJobJson: currentJob,
      },
    };
  },
  created() {
    // Fetch profile previews to pass in as props
    apiClient.get('/profile/previews')
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
