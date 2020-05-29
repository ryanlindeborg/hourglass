<template>
  <div>
    <router-link :to="{ name: 'Profile', params: { userId: profilePreview.user.id }}"
                 tag="div" class="profile-card">
      <img :src="imageSquareUrl" :alt="userFullName" />
      <div>
        <p>{{ profilePreview.user.firstName }} {{ profilePreview.user.lastName }}</p>
        <p>{{ profilePreview.currentJob.position }},
          {{ profilePreview.currentJob.company.name }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['profilePreview'],
  computed: {
    userFullName() {
      return (this.profilePreview.user == null ? null
        : `${this.profilePreview.user.firstName} ${this.profilePreview.user.lastName}`);
    },
    imageSquareUrl() {
      return (this.profilePreview.user == null ? null
        : `/images/user/${this.profilePreview.user.imageSquareName}.png`);
    },
  },
};
</script>

<style scoped>
  div.profile-card { display: inline-block; border-radius: 10%; }
  div.profile-card img { width: 240px; height: 240px; border-radius: 10% 10% 0 0; }
  div.profile-card div { width: 240px; padding: 1em; background-color: #F5F5F7;
    border-radius: 0 0 10% 10%; }
  div.profile-card p { font-weight: 700; }
  div.profile-card p:first-of-type { font-size: 1.3em; margin-bottom: 0.5em; }
  div.profile-card p:last-of-type { margin-bottom: 0; }
</style>
