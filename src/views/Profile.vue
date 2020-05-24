<template>
  <div>
    <p></p>
    <section class="splash">
      <img src="/images/RL-headshot-square.png" :alt="userFullName" />
      <h1>Hourglass Profile: {{ userFullName }}</h1>
      <h2>{{ profileDetails.currentJob.position }} at
        {{ profileDetails.currentJob.company.name }}</h2>
    </section>
    <section class="profile-details">
      <section>
        <h3>Current Job</h3>
        <p>Company: {{ profileDetails.currentJob.company.name }}</p>
        <p>Position: {{ profileDetails.currentJob.position }}</p>
        <p>Industry: {{ profileDetails.currentJob.company.industry }}</p>
      </section>
      <section class="education-history">
        <i class="fas fa-graduation-cap"></i>
        <div>
          <h3>College</h3>
          <section>
            <p>School: {{ profileDetails.collegeSchoolUser.school.name }}</p>
            <p>Degree: {{ profileDetails.collegeSchoolUser.degree }}</p>
            <p>Field of Study: {{ profileDetails.collegeSchoolUser.fieldOfStudy }}</p>
          </section>
          <h3>Postgraduate Education</h3>
          <section>
            <p>School: {{ profileDetails.postGradSchoolUser.school.name }}</p>
            <p>Degree: {{ profileDetails.postGradSchoolUser.degree }}</p>
            <p>Field of Study: {{ profileDetails.postGradSchoolUser.fieldOfStudy }}</p>
          </section>
        </div>
      </section>
      <section class="dream">
        <h3>Me in 10 Years</h3>
        <h4>Dream Job</h4>
        <p>Company: {{ profileDetails.dreamJob.company.name }}</p>
        <p>Position: {{ profileDetails.dreamJob.position }}</p>
        <p>Industry: {{ profileDetails.dreamJob.company.industry }}</p>
      </section>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profileDetails: '',
      hasProfileDetailsLoaded: false,
    };
  },
  computed: {
    userFullName() {
      return (this.profileDetails.user == null ? null
        : `${this.profileDetails.user.firstName} ${this.profileDetails.user.lastName}`);
    },
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
  section.splash { height: 20em; padding-top: 1em; margin: 4vw; }
  section.splash img { border: 3px solid black; width: 20em; height: 20em; border-radius: 100%;
    float: right; margin: -1em 8% 0 0; }
  h1 { font-size: 3.5em; margin-bottom: 2%; }
  section.profile-details { background-color: #F5F9FA; }
  section.education-history div { float: right; }
  i { color: #4390C5; font-size: 3em; }
</style>
