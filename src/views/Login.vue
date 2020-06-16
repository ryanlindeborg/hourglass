<template>
  <div>
    <aside></aside>
    <section class="body">
      <section class="flex-container">
        <div>
          <h1>Hourglass, a path towards a fulfilling career</h1>
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
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginDetails: {
        loginName: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // TODO: Have to save JWT to Vuex store
      this.$store.dispatch('login', this.loginDetails);
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
