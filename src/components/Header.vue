<template>
  <div class="header">
    <nav>
      <router-link to="/"><img src="/images/timeline-logo.png" alt="Timeline" /></router-link>
      <p><router-link to="/my-career">My Career</router-link></p>
      <p><router-link to="/search">Search</router-link></p>
      <p><router-link to="/profile-library">Profile Library</router-link></p>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
  nav { background-color: #b5b7bd; height: 4em; }
  img { display: inline-block; margin: 0.3em; height: 80%; }
  p { display: inline-block; }
</style>
