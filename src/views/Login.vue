<template>
  <div>
    <aside></aside>
    <section class="body">
      <section class="flex-container">
        <div>
          <h1>Hourglass, a path towards a fulfilling career</h1>
          <!-- TODO: Think about putting showAlert in Vuex state,
          and making the b-alert a separate component you include -->
          <b-alert variant="danger" v-model="showAlert" dismissible fade>
            {{ alertMessage }}</b-alert>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="loginName">Username or Email</label>
              <input type="text" placeholder="Username or Email" id="loginName" class="form-control"
                     v-model="loginDetails.loginName"/>
            </div>
            <div class="form-group">
              <label for="lastName">Password</label>
              <input type="text" placeholder="Name" id="lastName" class="form-control"
                     v-model="loginDetails.password" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
        <div>
          <button @click="oauthLogin">Login with GitHub</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import userService from '../services/userService';

export default {
  data() {
    return {
      loginDetails: {
        loginName: '',
        password: '',
      },
      alertMessage: '',
      showAlert: false,
    };
  },
  methods: {
    login() {
      userService.loginUser(this.loginDetails)
        .then(() => {
          this.$router.push({ name: 'ProfileLibrary' });
        })
        .catch((error) => {
          this.alertMessage = error.response.data.error;
          this.showAlert = true;
        });
    },
    oauthLogin() {
      userService.loginOAuthUser()
        .then(() => {
          this.$router.push({ name: 'ProfileLibrary' });
        });
    },
  },
};
</script>

<style scoped>
  aside { display: inline-block; width: 20%; height: calc(100vh - 4em);
    background-image: linear-gradient(to bottom, #87cafa, #1167b1) }
  section.body { display: inline-block; width: 80%; height: calc(100vh - 6em);
    vertical-align: top; padding: 1.5em; }
  section.flex-container { display: flex; justify-content: center; align-items: center;
    height: 100%; }
  input[type="text"] { width: 20em !important; }
</style>
