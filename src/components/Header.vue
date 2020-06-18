<template>
  <div class="header">
    <nav>
      <router-link :to="{ name: 'Home' }"><img src="/images/timeline-logo.png" alt="Timeline" />
      </router-link>
      <section>
        <div v-if="!isAuthenticated">
          <router-link :to="{ name: Register }" tag="p">Register</router-link>
          <router-link :to="{ name: Login }" tag="p">Login</router-link>
        </div>
        <div v-else>
          <router-link :to="{ name: 'MyCareer' }" tag="p">My Career</router-link>
          <router-link :to="{ name: 'SimilarProfiles', params: { displayName: userDisplayName }}"
                       tag="p">Similar Profiles</router-link>
          <router-link :to="{ name: 'ProfileLibrary' }" tag="p">Profile Library</router-link>
          <router-link :to="{ name: 'Search' }" tag="p">Search</router-link>
          <router-link :to="{ name: 'Login' }" tag="p">Logout</router-link>
        </div>
      </section>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    userDisplayName() {
      return this.$store.getters.userDisplayName;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
  nav { background-color: #C2C3CC; height: 4em; }
  nav div { display: inline-block; }
  img { display: inline-block; margin: 0.3em; height: 80%; }
  section { float: right; margin-right: 1em; }
  p { color: #007bff; display: inline-block; padding: 1.2em; margin: 0; }
  p:hover { cursor: pointer; color: #0056b3; background-color: #B9BAC4; }
</style>
