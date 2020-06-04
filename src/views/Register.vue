<template>
  <div>
    <section class="body">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" placeholder="Name" id="firstName" class="form-control"
                 v-model="firstName" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" placeholder="Name" id="lastName" class="form-control"
                 v-model="lastName" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" placeholder="Email" id="email" class="form-control"
                 v-model="email"/>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" placeholder="Username" id="username" class="form-control"
                 v-model="username"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" placeholder="Name" id="password" class="form-control"
                 v-model="password" />
        </div>
        <div class="form-group">
          <label for="lastName">Confirm Password</label>
          <input type="text" placeholder="Confirm Password" id="repeatPassword" class="form-control"
                 v-model="repeatPassword" />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    };
  },
  methods: {
    register() {
      return null;
    },
  },
};
</script>

<style scoped>
  section.body { padding: 1.5em; }
</style>
