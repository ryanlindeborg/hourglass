<template>
  <div>
    <section class="body">
      <h1>Register</h1>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" placeholder="Name" id="firstName" class="form-control"
                 v-model="registrationDetails.firstName" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" placeholder="Name" id="lastName" class="form-control"
                 v-model="registrationDetails.lastName" />
        </div>
        <div class="form-group" :class="{ invalid: $v.registrationDetails.email.$error }">
          <label for="email">Email</label>
          <input type="text" placeholder="Email" id="email" class="form-control"
                 v-model="registrationDetails.email"/>
          <p v-if="!$v.registrationDetails.email.required">Email is required</p>
          <p v-if="!$v.registrationDetails.email.email">This is not a valid email address</p>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" placeholder="Username" id="username" class="form-control"
                 v-model="registrationDetails.username"/>
        </div>
        <div class="form-group">
          <label for="displayName">Profile Handle</label>
          <input type="text" placeholder="Profile Handle" id="displayName" class="form-control"
                 v-model="registrationDetails.displayName"/>
        </div>
        <div class="form-group" :class="{ invalid: $v.registrationDetails.password.$error }">
          <label for="password">Password</label>
          <input type="text" placeholder="Name" id="password" class="form-control"
                 v-model="registrationDetails.password" />
          <p v-if="!$v.registrationDetails.password.minLength">
            Password must be at least {{ $v.registrationDetails.password.$params.minLength.min }}
            characters long</p>
        </div>
        <div class="form-group" :class="{ invalid: $v.registrationDetails.repeatPassword.$error }">
          <label for="lastName">Confirm Password</label>
          <input type="text" placeholder="Confirm Password" id="repeatPassword" class="form-control"
                 v-model="registrationDetails.repeatPassword" />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        <p v-if="$v.error">Oops, try fixing the errors and submitting again!</p>
      </form>
    </section>
  </div>
</template>

<script>
import {
  required, email, minLength, sameAs,
} from 'vuelidate/lib/validators';

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
      },
      displayName: {
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      repeatPassword: {
        required,
        sameAs: sameAs('registrationDetails.repeatPassword'),
      },
    },
  },
  methods: {
    registerUser() {
      if (this.isInputValid()) {
        this.$store.dispatch('registerUser', this.registrationDetails);
      }
    },
    isInputValid() {
      this.$v.registrationDetails.email.touch();
      this.$v.registrationDetails.password.touch();
      this.$v.registrationDetails.repeatPassword.touch();
      return true;
    },
  },
};
</script>

<style scoped>
  section.body { padding: 1.5em; }
  .invalid { border: 2px solid red; }
</style>
