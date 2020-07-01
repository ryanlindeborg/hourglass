<template>
  <div>
    <section class="body">
      <h1>My Career</h1>
      <b-alert variant="danger" v-model="showAlert" dismissible fade>
        {{ alertMessage }}</b-alert>
      <b-alert variant="success" v-model="showSuccess" dismissible fade>
        {{ successMessage }}</b-alert>
      <form @submit.prevent="submitProfileInfo">
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" placeholder="Company" id="company" class="form-control"
                 v-model="profileDetails.currentJobJson.companyJson.name" />
          <small id="companyHelp" class="form-text text-muted">Where do you currently work?</small>
        </div>
        <div class="form-group">
          <label for="position">Position</label>
          <input type="text" placeholder="Position" id="position" class="form-control"
          v-model="profileDetails.currentJobJson.position"/>
          <small id="positionHelp" class="form-text text-muted">
            e.g., Chief Puppy Officer, Vice President of Office Snacks
          </small>
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <select v-model="profileDetails.currentJobJson.industry" id="industry">
            <option></option>
            <option v-for="industry in industries" :key="industry">{{ industry }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="college">College</label>
          <input type="text" placeholder="College" id="college" class="form-control"
          v-model="profileDetails.collegeSchoolUserJson.schoolJson.name" />
          <small id="collegeHelp" class="form-text text-muted">Your proud alma mater</small>
        </div>
        <div class="form-group">
          <label for="fieldOfStudy">Field of Study</label>
          <input type="text" placeholder="Field of Study" id="fieldOfStudy" class="form-control"
          v-model="profileDetails.collegeSchoolUserJson.fieldOfStudy"/>
          <small id="fieldOfStudyHelp" class="form-text text-muted">
            Your major - what are you officially a certified expert in?
          </small>
        </div>
        <div class="form-group">
          <label for="yearOfGraduation">Year of Graduation</label>
          <input type="text" placeholder="Year of Graduation" id="yearOfGraduation"
                 class="form-control" v-model="profileDetails.collegeSchoolUserJson.endDate" />
          <small id="yearOfGraduationHelp" class="form-text text-muted">Only if applicable</small>
        </div>
        <div class="form-group">
          <label for="postGradSchool">Post-Grad School</label>
          <input type="text" placeholder="Post-Grad School" id="postGradSchool"
                 class="form-control"
                 v-model="profileDetails.postGradSchoolUserJson.schoolJson.name" />
          <small id="postGradSchoolHelp" class="form-text text-muted">
            Your proud alma mater, take 2
          </small>
        </div>
        <div class="form-group">
          <label for="postGradDegree">Degree</label>
          <select v-model="profileDetails.postGradSchoolUserJson.degree" id="postGradDegree">
            <option></option>
            <option v-for="degree in degrees" :key="degree">{{ degree }}</option>
          </select>
          <small id="degreeHelp" class="form-text text-muted">
            The fancy letter acronyms (MD, JD, MBA)
          </small>
        </div>
        <div class="form-group">
          <label for="fieldOfStudyPostGrad">Field of Study</label>
          <input type="text" placeholder="Field of Study" id="fieldOfStudyPostGrad"
                 class="form-control"
                 v-model="profileDetails.postGradSchoolUserJson.fieldOfStudy" />
          <small id="fieldOfStudyPostGradHelp" class="form-text text-muted">
            What are you officially a certified expert in?
          </small>
        </div>
        <div class="form-group">
          <label for="yearOfPostGradGraduation">Year of Graduation</label>
          <input type="text" placeholder="Year of Graduation" id="yearOfPostGradGraduation"
                 class="form-control" v-model="profileDetails.postGradSchoolUserJson.endDate" />
          <small id="yearOfPostGradGraduationHelp" class="form-text text-muted">
            Only if applicable
          </small>
        </div>
        <div class="form-group">
          <label for="firstCompanyPostCollege">First Company Post-College</label>
          <input type="text" placeholder="First Company Post-College" id="firstCompanyPostCollege"
                 class="form-control"
                 v-model="profileDetails.firstPostCollegeJobJson.companyJson.name" />
          <small id="firstCompanyPostCollegeHelp" class="form-text text-muted">
            Who hired you as a freshly minted grad?
          </small>
        </div>
        <div class="form-group">
          <label for="firstPositionPostCollege">First Position Post-College</label>
          <input type="text" placeholder="Position" id="firstPositionPostCollege"
                 class="form-control" v-model="profileDetails.firstPostCollegeJobJson.position" />
          <small id="firstPositionPostCollegeHelp" class="form-text text-muted">
            Title on your first business card
          </small>
        </div>
        <div class="form-group">
          <label for="industryOfFirstCompanyPostCollege">
            Industry of First Company Post-College</label>
          <select v-model="profileDetails.firstPostCollegeJobJson.industry"
                  id="industryOfFirstCompanyPostCollege">
            <option></option>
            <option v-for="industry in industries" :key="industry">{{ industry }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="dreamCompany">Dream Company</label>
          <input type="text" placeholder="Dream Company" id="dreamCompany" class="form-control"
          v-model="profileDetails.dreamJobJson.companyJson.name" />
        </div>
        <div class="form-group">
          <label for="dreamPosition">Dream Position</label>
          <input type="text" placeholder="Dream Position" id="dreamPosition" class="form-control"
          v-model="profileDetails.dreamJobJson.position" />
        </div>
        <div class="form-group">
          <label for="dreamIndustry">Dream Industry</label>
          <select v-model="profileDetails.dreamJobJson.industry" id="dreamIndustry">
              <option></option>
              <option v-for="industry in industries" :key="industry">{{ industry }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
import lodash from 'lodash';
import userService from '../services/userService';
import apiClient from '../services/apiClient';
import { currentJob, user } from '../services/defaultObjects';

export default {
  data() {
    return {
      profileDetails: {
        userJson: user,
        currentJobJson: currentJob,
        firstPostCollegeJobJson: {
          id: null,
          position: '',
          industry: '',
          companyJson: {
            id: null,
            name: '',
          },
        },
        dreamJobJson: {
          id: null,
          position: '',
          industry: '',
          companyJson: {
            id: null,
            name: '',
          },
        },
        collegeSchoolUserJson: {
          id: null,
          schoolJson: {
            id: null,
            name: '',
          },
          endDate: '',
          fieldOfStudy: '',
        },
        postGradSchoolUserJson: {
          id: null,
          schoolJson: {
            id: null,
            name: '',
          },
          endDate: '',
          degree: '',
          fieldOfStudy: '',
        },
      },
      industries: [],
      degrees: [],
      successMessage: '',
      showSuccess: false,
      alertMessage: '',
      showAlert: false,
    };
  },
  methods: {
    submitProfileInfo() {
      // Deep clone the profile details so that can format the date fields
      const profileDetailsSubmission = lodash.cloneDeep(this.profileDetails);
      // Format dates before post the data to the backend
      profileDetailsSubmission.collegeSchoolUserJson.endDate = moment(
        this.profileDetails.collegeSchoolUserJson.endDate,
      );
      profileDetailsSubmission.postGradSchoolUserJson.endDate = moment(
        this.profileDetails.postGradSchoolUserJson.endDate,
      );

      userService.submitProfileDetails(profileDetailsSubmission)
        .then(() => {
          this.successMessage = 'Profile info updated successfully';
          this.showSuccess = true;
        })
        .catch((error) => {
          this.alertMessage = error.response.data.error;
          this.showAlert = true;
        });
    },
    clearFlashMessages() {
      this.successMessage = '';
      this.showSuccess = false;
      this.alertMessage = '';
      this.showAlert = false;
    },
    formatDateToYear(date) {
      if (date) {
        // return moment(String(date)).format('YYYY');
        return moment(date, 'YYYY-MM-DD').format('YYYY');
      }
      return '';
    },
  },
  created() {
    userService.getProfileDetails()
      .then((res) => {
        const { data } = res;
        // Format dates to just display year
        const collegeGradYear = this.formatDateToYear(data.collegeSchoolUserJson.endDate);
        data.collegeSchoolUserJson.endDate = collegeGradYear;
        const postGradYear = this.formatDateToYear(data.postGradSchoolUserJson.endDate);
        data.postGradSchoolUserJson.endDate = postGradYear;

        this.profileDetails = data;
      })
      .catch((error) => console.log(error));

    // Fetch list of industries from server-side app
    apiClient.get('/company/industries')
      .then((res) => {
        const { data } = res;
        this.industries = data;
      });
    // Fetch list of degrees from server-side app
    apiClient.get('/schoolUser/degrees')
      .then((res) => {
        const { data } = res;
        this.degrees = data;
      });
  },
};
</script>

<style scoped>
  section.body { padding: 1.5em; }
  section.body select { display: block; }
</style>
