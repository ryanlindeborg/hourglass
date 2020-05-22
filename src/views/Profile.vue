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
      profileDetails: {
        user: {
          id: null,
          firstName: '',
          lastName: '',
          dateOfBirth: '',
        },
        currentJob: {
          id: null,
          position: '',
          industry: '',
          company: {
            id: null,
            name: '',
          },
        },
        firstPostCollegeJob: {
          id: null,
          position: '',
          industry: '',
          company: {
            id: null,
            name: '',
          },
        },
        dreamJob: {
          id: null,
          position: '',
          industry: '',
          company: {
            id: null,
            name: '',
          },
        },
        collegeSchoolUser: {
          id: null,
          school: {
            id: null,
            name: '',
          },
          endDate: '',
          fieldOfStudy: '',
        },
        postGradSchoolUser: {
          id: null,
          school: {
            id: null,
            name: '',
          },
          endDate: '',
          degree: '',
          fieldOfStudy: '',
        },
      },
    };
  },
  props: ['userId'],
  created() {
    // Fetch profileDetails using userId param specified in the url
    axios.get(`${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1/profile/user/${this.userId}`)
      .then((res) => {
        const { data } = res;
        // TODO: Parse json response to save into Vue data fields
        this.profileDetails.user.firstName = data.user.firstName;
        this.profileDetails.user.lastName = data.user.lastName;
      });
  },
};
</script>

<style scoped>
</style>
