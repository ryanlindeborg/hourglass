<template>
  <div>
    <router-link :to="{ name: 'Profile',
    params: { displayName: profilePreview.userJson.displayName }}" tag="div" class="profile-card">
      <img :src="imageSquareUrl" :alt="userFullName" />
      <div>
        <p>{{ profilePreview.userJson.firstName }} {{ profilePreview.userJson.lastName }}</p>
        <p>{{ profilePreview.currentJobJson.position }},
          {{ profilePreview.currentJobJson.companyJson.name }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['profilePreview'],
  computed: {
    userFullName() {
      return (this.profilePreview.userJson == null ? null
        : `${this.profilePreview.userJson.firstName} ${this.profilePreview.userJson.lastName}`);
    },
    imageSquareUrl() {
      return (this.profilePreview.userJson == null ? null
        : `/images/user/${this.profilePreview.userJson.imageSquareName}.png`);
    },
  },
};
</script>

<style scoped>
  div.profile-card { display: inline-block; border-radius: 10%; }
  div.profile-card img { width: 240px; height: 240px; border-radius: 10% 10% 0 0; }
  div.profile-card div { width: 240px; height: 125px; padding: 1em; background-color: #F5F5F7;
    border-radius: 0 0 10% 10%; }
  div.profile-card p { font-weight: 700; }
  div.profile-card p:first-of-type { font-size: 1.3em; margin-bottom: 0.5em; }
  div.profile-card p:last-of-type { margin-bottom: 0; }
</style>
