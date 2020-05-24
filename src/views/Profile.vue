<template>
  <div>
    <h1>Hourglass Profile: {{ profileDetails.user.firstName }}
      {{ profileDetails.user.lastName }}</h1>
    <h2>{{ profileDetails.currentJob.position }} at
      {{ profileDetails.currentJob.company.name }}</h2>
    <h3>College: {{ profileDetails.collegeSchoolUser.school.name }}</h3>
    <section>
      <h4>Current Job</h4>
      <p>Company: {{ profileDetails.currentJob.company.name }}</p>
      <p>Position: {{ profileDetails.currentJob.position }}</p>
      <p>Industry: {{ profileDetails.currentJob.company.industry }}</p>
    </section>
    <section>
      <h4>Current Job</h4>
      <p>Company: {{ profileDetails.currentJob.company.name }}</p>
      <p>Position: {{ profileDetails.currentJob.position }}</p>
      <p>Industry: {{ profileDetails.currentJob.company.industry }}</p>
    </section>
    <section class="education-history">
      <h4>College</h4>
      <section class="college">
        <p>School: {{ profileDetails.collegeSchoolUser.school.name }}</p>
        <p>Degree: {{ profileDetails.collegeSchoolUser.degree }}</p>
        <p>Field of Study: {{ profileDetails.collegeSchoolUser.fieldOfStudy }}</p>
      </section>
      <h4>Postgraduate Education</h4>
      <section class="postgrad">
        <p>School: {{ profileDetails.postGradSchoolUser.school.name }}</p>
        <p>Degree: {{ profileDetails.postGradSchoolUser.degree }}</p>
        <p>Field of Study: {{ profileDetails.postGradSchoolUser.fieldOfStudy }}</p>
      </section>
    </section>
    <section class="dream">
      <h4>Me in 10 Years</h4>
      <h5>Dream Job</h5>
      <p>Company: {{ profileDetails.dreamJob.company.name }}</p>
      <p>Position: {{ profileDetails.dreamJob.position }}</p>
      <p>Industry: {{ profileDetails.dreamJob.company.industry }}</p>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profileDetails: '',
      // TODO: Loading wheel paradigm where take away loading GIF once have set the data
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
