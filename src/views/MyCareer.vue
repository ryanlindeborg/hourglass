<template>
  <div>
    <section class="body">
      <h1>My Career</h1>
      <form @submit.prevent="submitProfileInfo">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" placeholder="Name" id="firstName" class="form-control"
                 v-model="userJson.firstName" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" placeholder="Name" id="lastName" class="form-control"
                 v-model="userJson.lastName" />
        </div>
        <div class="form-group">
          <label for="dateOfBirth">Date of Birth</label>
          <input type="text" placeholder="Date of Birth" id="dateOfBirth" class="form-control"
          v-model="userJson.dateOfBirth"/>
        </div>
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" placeholder="Company" id="company" class="form-control"
                 v-model="currentJobJson.companyJson.name" />
          <small id="companyHelp" class="form-text text-muted">Where do you currently work?</small>
        </div>
        <div class="form-group">
          <label for="position">Position</label>
          <input type="text" placeholder="Position" id="position" class="form-control"
          v-model="currentJobJson.position"/>
          <small id="positionHelp" class="form-text text-muted">
            e.g., Chief Puppy Officer, Vice President of Office Snacks
          </small>
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <select v-model="currentJobJson.industry" id="industry">
            <option></option>
            <option v-for="industry in industries" :key="industry">{{ industry }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="college">College</label>
          <input type="text" placeholder="College" id="college" class="form-control"
          v-model="collegeSchoolUserJson.schoolJson.name" />
          <small id="collegeHelp" class="form-text text-muted">Your proud alma mater</small>
        </div>
        <div class="form-group">
          <label for="fieldOfStudy">Field of Study</label>
          <input type="text" placeholder="Field of Study" id="fieldOfStudy" class="form-control"
          v-model="collegeSchoolUserJson.fieldOfStudy"/>
          <small id="fieldOfStudyHelp" class="form-text text-muted">
            Your major - what are you officially a certified expert in?
          </small>
        </div>
        <div class="form-group">
          <label for="yearOfGraduation">Year of Graduation</label>
          <input type="text" placeholder="Year of Graduation" id="yearOfGraduation"
                 class="form-control" v-model="collegeSchoolUserJson.endDate" />
          <small id="yearOfGraduationHelp" class="form-text text-muted">Only if applicable</small>
        </div>
        <div class="form-group">
          <label for="postGradSchool">Post-Grad School</label>
          <input type="text" placeholder="Post-Grad School" id="postGradSchool"
                 class="form-control" v-model="postGradSchoolUserJson.schoolJson.name" />
          <small id="postGradSchoolHelp" class="form-text text-muted">
            Your proud alma mater, take 2
          </small>
        </div>
        <div class="form-group">
          <label for="postGradDegree">Degree</label>
          <select v-model="postGradSchoolUserJson.degree" id="postGradDegree">
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
                 class="form-control" v-model="postGradSchoolUserJson.fieldOfStudy" />
          <small id="fieldOfStudyPostGradHelp" class="form-text text-muted">
            What are you officially a certified expert in?
          </small>
        </div>
        <div class="form-group">
          <label for="yearOfPostGradGraduation">Year of Graduation</label>
          <input type="text" placeholder="Year of Graduation" id="yearOfPostGradGraduation"
                 class="form-control" v-model="postGradSchoolUserJson.endDate" />
          <small id="yearOfPostGradGraduationHelp" class="form-text text-muted">
            Only if applicable
          </small>
        </div>
        <div class="form-group">
          <label for="firstCompanyPostCollege">First Company Post-College</label>
          <input type="text" placeholder="First Company Post-College" id="firstCompanyPostCollege"
                 class="form-control" v-model="firstPostCollegeJobJson.companyJson.name" />
          <small id="firstCompanyPostCollegeHelp" class="form-text text-muted">
            Who hired you as a freshly minted grad?
          </small>
        </div>
        <div class="form-group">
          <label for="firstPositionPostCollege">First Position Post-College</label>
          <input type="text" placeholder="Position" id="firstPositionPostCollege"
                 class="form-control" v-model="firstPostCollegeJobJson.position" />
          <small id="firstPositionPostCollegeHelp" class="form-text text-muted">
            Title on your first business card
          </small>
        </div>
        <div class="form-group">
          <label for="industryOfFirstCompanyPostCollege">
            Industry of First Company Post-College</label>
          <select v-model="firstPostCollegeJobJson.industry" id="industryOfFirstCompanyPostCollege">
            <option></option>
            <option v-for="industry in industries" :key="industry">{{ industry }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="dreamCompany">Dream Company</label>
          <input type="text" placeholder="Dream Company" id="dreamCompany" class="form-control"
          v-model="dreamJobJson.companyJson.name" />
        </div>
        <div class="form-group">
          <label for="dreamPosition">Dream Position</label>
          <input type="text" placeholder="Dream Position" id="dreamPosition" class="form-control"
          v-model="dreamJobJson.position" />
        </div>
        <div class="form-group">
          <label for="dreamIndustry">Dream Industry</label>
          <select v-model="dreamJobJson.industry" id="dreamIndustry">
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
import axios from 'axios';

export default {
  data() {
    return {
      userJson: {
        id: null,
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        imageSquareName: '',
      },
      currentJobJson: {
        id: null,
        position: '',
        industry: '',
        companyJson: {
          id: null,
          name: '',
        },
      },
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
      industries: [],
      degrees: [],
    };
  },
  methods: {
    submitProfileInfo() {
      const formData = {
        userJson: this.userJson,
        currentJobJson: this.currentJobJson,
        firstPostCollegeJobJson: this.firstPostCollegeJobJson,
        dreamJobJson: this.dreamJobJson,
        collegeSchoolUserJson: this.collegeSchoolUserJson,
        postGradSchoolUserJson: this.postGradSchoolUserJson,
      };

      axios.post(`${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1/profile/user`, formData)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
  created() {
    // Fetch list of industries from server-side app
    axios.get(`${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1/company/industries`)
      .then((res) => {
        const { data } = res;
        this.industries = data;
      });
    // Fetch list of degrees from server-side app
    axios.get(`${process.env.VUE_APP_BASE_SPRING_API_URL}/api/v1/schoolUser/degrees`)
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
