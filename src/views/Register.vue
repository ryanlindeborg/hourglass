<template>
  <div>
    <section class="body">
      <h1>Register</h1>
      <b-alert variant="danger" v-model="showAlert" dismissible fade>
        {{ alertMessage }}</b-alert>
      <b-alert variant="success" v-model="showSuccess" dismissible fade>
        {{ successMessage }}</b-alert>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" placeholder="Name" id="firstName"
                 class="form-control"
                 :class="[{ invalid: $v.registrationDetails.firstName.$error }]"
                 v-model="registrationDetails.firstName" />
          <div v-if="$v.registrationDetails.firstName.$error" class="error-message">
            <p v-if="!$v.registrationDetails.firstName.required">First name is required</p>
          </div>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" placeholder="Name" id="lastName"
                 class="form-control"
                 :class="[{ invalid: $v.registrationDetails.lastName.$error }]"
                 v-model="registrationDetails.lastName" />
          <div v-if="$v.registrationDetails.lastName.$error" class="error-message">
            <p v-if="!$v.registrationDetails.lastName.required">Last name is required</p>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" placeholder="Email" id="email"
                 class="form-control"
                 :class="[{ invalid: $v.registrationDetails.email.$error }]"
                 v-model="registrationDetails.email"/>
          <div v-if="$v.registrationDetails.email.$error" class="error-message">
            <p v-if="!$v.registrationDetails.email.required">Email is required</p>
            <p v-if="!$v.registrationDetails.email.email">This is not a valid email address</p>
          </div>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" placeholder="Username" id="username"
                 class="form-control"
                 :class="[{ invalid: $v.registrationDetails.username.$error }]"
                 v-model="registrationDetails.username"/>
          <div v-if="$v.registrationDetails.username.$error" class="error-message">
            <p v-if="!$v.registrationDetails.username.required">Username is required</p>
            <p v-if="!$v.registrationDetails.username.alphaNum">
              Username must consist only of alphanumeric characters</p>
          </div>
        </div>
        <div class="form-group">
          <label for="displayName">Profile Handle</label>
          <input type="text" placeholder="Profile Handle" id="displayName"
                 class="form-control"
                 :class="[{ invalid: $v.registrationDetails.displayName.$error }]"
                 v-model="registrationDetails.displayName"/>
          <div v-if="$v.registrationDetails.displayName.$error" class="error-message">
            <p v-if="!$v.registrationDetails.displayName.required">Profile handle is required</p>
            <p v-if="!$v.registrationDetails.displayName.alphaNum">
              Profile handle must consist only of alphanumeric characters</p>
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" placeholder="Name" id="password"
                 class="form-control"
                 :class="{ invalid: $v.registrationDetails.password.$error }"
                 v-model="registrationDetails.password" />
          <div v-if="$v.registrationDetails.password.$error" class="error-message">
            <p v-if="!$v.registrationDetails.password.minLength">
              Password must be at least {{ $v.registrationDetails.password.$params.minLength.min }}
              characters long</p>
          </div>
        </div>
        <div class="form-group">
          <label for="lastName">Confirm Password</label>
          <input type="text" placeholder="Confirm Password" id="repeatPassword"
                 class="form-control"
                 :class="{ invalid: $v.registrationDetails.repeatPassword.$error }"
                 v-model="registrationDetails.repeatPassword" />
          <div v-if="$v.registrationDetails.repeatPassword.$error" class="error-message">
            <p v-if="!$v.registrationDetails.repeatPassword.sameAs">Passwords must match</p>
            <p>Password: {{ registrationDetails.password }}</p>
            <p>Password 2: {{ registrationDetails.repeatPassword }}</p>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        <p v-if="$v.error">Oops, try fixing the errors and submitting again!</p>
      </form>
    </section>
  </div>
</template>

<script>
import {
  required, email, minLength, sameAs, alphaNum,
} from 'vuelidate/lib/validators';
import userService from '../services/userService';

export default {
  data() {
    return {
      registrationDetails: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        displayName: '',
        password: '',
        repeatPassword: '',
      },
      successMessage: '',
      showSuccess: false,
      alertMessage: '',
      showAlert: false,
    };
  },
  validations: {
    registrationDetails: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email,
      },
      username: {
        required,
        alphaNum,
      },
      displayName: {
        required,
        alphaNum,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      repeatPassword: {
        required,
        sameAs: sameAs('password'),
      },
    },
  },
  methods: {
    registerUser() {
      if (this.isInputValid()) {
        userService.registerUser(this.registrationDetails)
          .then(() => {
            this.successMessage = `Thanks for registering, ${this.registrationDetails.firstName}!
            Log in to jumpstart your career!`;
            this.showSuccess = true;
            setTimeout(() => {
              this.$router.push({ name: 'Login' });
            }, 2000);
          })
          .catch((error) => {
            this.alertMessage = error.response.data.error;
            this.showAlert = true;
          });
      }
    },
    isInputValid() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
  },
};
</script>

<style scoped>
  section.body { padding: 1.5em; }
  .invalid { border: 2px solid red; }
  .error-message p { color: red; }
</style>
