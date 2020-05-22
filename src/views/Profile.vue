<template>
  <div>
    <h1>Hourglass Profile: {{ profileDetails.user.firstName }}
      {{ profileDetails.user.lastName }}</h1>
    <h2>{{ profileDetails.currentJob.position }} at
      {{ profileDetails.currentJob.company.name }}</h2>
    <h3>College: {{ profileDetails.collegeSchoolUser.school.name }}</h3>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profileDetails: '',

    };
  },
  props: ['userId'],
  created() {
    // Fetch profileDetails using userId param specified in the url
    axios.get(`${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1/profile/user/${this.userId}`)
      .then((res) => {
        const { data } = res;
        this.profileDetails = data;
      });
  },
};
</script>

<style scoped>
</style>
