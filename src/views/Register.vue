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
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" placeholder="Email" id="email" class="form-control"
                 @input="$v.registrationDetails.email.touch()"
                 v-model="registrationDetails.email"/>
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
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" placeholder="Name" id="password" class="form-control"
                 v-model="registrationDetails.password" />
        </div>
        <div class="form-group">
          <label for="lastName">Confirm Password</label>
          <input type="text" placeholder="Confirm Password" id="repeatPassword" class="form-control"
                 v-model="registrationDetails.repeatPassword" />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </section>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

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
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    registerUser() {
      this.$store.dispatch('registerUser', this.registrationDetails);
    },
  },
};
</script>

<style scoped>
  section.body { padding: 1.5em; }
</style>
