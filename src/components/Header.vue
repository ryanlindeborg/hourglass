<template>
  <div class="header">
    <nav>
      <router-link to="/"><img src="/images/timeline-logo.png" alt="Timeline" /></router-link>
      <section>
        <router-link to="/my-career" tag="p">My Career</router-link>
        <router-link to="/search" tag="p">Search</router-link>
        <router-link to="/profile-library" tag="p">Profile Library</router-link>
      </section>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
  nav { background-color: #C2C3CC; height: 4em; }
  img { display: inline-block; margin: 0.3em; height: 80%; }
  section { float: right; margin-right: 1em; }
  p { color: #007bff; display: inline-block; padding: 1.2em; margin: 0; }
  p:hover { cursor: pointer; color: #0056b3; background-color: #B9BAC4; }
</style>
