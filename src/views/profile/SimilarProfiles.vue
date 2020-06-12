<template>
  <div>
    <section>
      <h1>Similar Profiles</h1>
      <section v-for="similarProfile in similarProfiles" :key="similarProfile.userJson.id">
        <SimilarProfileCard :similar-profile="similarProfile" class="similar-profile-container" />
      </section>
    </section>
  </div>
</template>

<script>
import apiClient from '../../services/apiClient';
import SimilarProfileCard from '../../components/profile/SimilarProfileCard.vue';

export default {
  components: { SimilarProfileCard },
  data() {
    return {
      similarProfiles: '',
    };
  },
  props: ['displayName'],
  created() {
    // Fetch similar profiles to pass in as props
    apiClient.get(`/profile/similar-profiles/${this.displayName}`)
      .then((res) => {
        const { data } = res;
        this.similarProfiles = data;
      });
  },
};
</script>

<style scoped></style>
