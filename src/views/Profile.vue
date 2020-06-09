<template>
  <div>
    <section class="splash">
      <img src="/images/RL-headshot-square.png" :alt="userFullName" />
      <h1>Hourglass Profile: {{ userFullName }}</h1>
      <div class="edit-container">
        <h2 v-if="profileDetails.currentJobJson">{{ profileDetails.currentJobJson.position }} at
          {{ profileDetails.currentJobJson.companyJson.name }}</h2>
        <i class="fas fa-pen edit" v-if="isEditable"></i>
      </div>
    </section>
    <section class="profile-details">
      <p v-if="!profileDetails">Looks like we don't have profile details on this user!</p>
      <section class="work-history" v-if="isWorkHistoryPresent">
        <i class="fas fa-briefcase"></i>
        <div>
          <section v-if="profileDetails.currentJobJson">
            <div class="edit-container">
              <h3>Current Job</h3>
              <i class="fas fa-pen edit" v-if="isEditable"></i>
            </div>
            <p>Company: {{ profileDetails.currentJobJson.companyJson.name }}</p>
            <p>Position: {{ profileDetails.currentJobJson.position }}</p>
            <p>Industry: {{ profileDetails.currentJobJson.companyJson.industry }}</p>
          </section>
          <br/>
          <section v-if="profileDetails.firstPostCollegeJobJson">
            <div class="edit-container">
              <h3>First Post-College Job</h3>
              <i class="fas fa-pen edit" v-if="isEditable"></i>
            </div>
            <p>Company: {{ profileDetails.firstPostCollegeJobJson.companyJson.name }}</p>
            <p>Position: {{ profileDetails.firstPostCollegeJobJson.position }}</p>
            <p>Industry:
              {{ profileDetails.firstPostCollegeJobJson.companyJson.industry }}</p>
          </section>
        </div>
      </section>
      <section class="education-history" v-if="isEducationHistoryPresent">
        <i class="fas fa-graduation-cap"></i>
        <div>
          <section v-if="profileDetails.collegeSchoolUserJson">
            <div class="edit-container">
              <h3>College</h3>
              <i class="fas fa-pen edit" v-if="isEditable"></i>
            </div>
            <p>School: {{ profileDetails.collegeSchoolUserJson.schoolJson.name }}</p>
            <p>Degree: {{ profileDetails.collegeSchoolUserJson.degree }}</p>
            <p>Field of Study: {{ profileDetails.collegeSchoolUserJson.fieldOfStudy }}</p>
          </section>
          <br/>
          <section v-if="profileDetails.postGradSchoolUserJson">
            <div class="edit-container">
              <h3>Postgraduate Education</h3>
              <i class="fas fa-pen edit" v-if="isEditable"></i>
            </div>
            <p>School: {{ profileDetails.postGradSchoolUserJson.schoolJson.name }}</p>
            <p>Degree: {{ profileDetails.postGradSchoolUserJson.degree }}</p>
            <p>Field of Study: {{ profileDetails.postGradSchoolUserJson.fieldOfStudy }}</p>
          </section>
        </div>
      </section>
      <section class="dream" v-if="profileDetails.dreamJobJson">
        <i class="fas fa-hourglass"></i>
        <div>
          <section v-if="profileDetails.dreamJobJson">
            <div class="edit-container">
              <h3>Dream Job</h3>
              <i class="fas fa-pen edit" v-if="isEditable"></i>
            </div>
            <p>Company: {{ profileDetails.dreamJobJson.companyJson.name }}</p>
            <p>Position: {{ profileDetails.dreamJobJson.position }}</p>
            <p>Industry: {{ profileDetails.dreamJobJson.companyJson.industry }}</p>
          </section>
        </div>
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
      isEditable: false,
    };
  },
  computed: {
    userFullName() {
      return (this.profileDetails.userJson == null ? null
        : `${this.profileDetails.userJson.firstName} ${this.profileDetails.userJson.lastName}`);
    },
    isWorkHistoryPresent() {
      return this.profileDetails.currentJobJson || this.profileDetails.firstPostCollegeJobJson;
    },
    isEducationHistoryPresent() {
      return this.profileDetails.collegeSchoolUserJson
        || this.profileDetails.postGradSchoolUserJson;
    },
  },
  props: ['displayName'],
  created() {
    // Fetch profileDetails using displayName param specified in the url
    axios.get(`${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1/profile/user/${this.displayName}`)
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
  section.profile-details { background-color: #F5F9FA; padding: 2em 0; }
  section.education-history, section.work-history, section.dream { margin: 4vw; }
  section.education-history > div, section.work-history > div,
  section.dream > div { padding-left: 40%; }
  section.education-history section:hover i.edit, section.work-history section:hover i.edit,
  section.dream section:hover i.edit { visibility: visible; }
  section.splash div.edit-container:hover i.edit { visibility: visible; }
  h2, h3 { display: inline-block; }
  i { color: #4390C5; font-size: 8em; padding-left: 4vw; float: left; }
  div.edit-container { display: inline-block; position: relative; }
  i.edit { font-size: 1.2em; position: absolute; top: 6px; right: -35px; visibility: hidden; }
  i.edit:hover { cursor: pointer; }
</style>
