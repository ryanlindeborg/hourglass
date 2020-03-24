<template>
  <div class="header">
    <nav>
      <router-link to="/"><img src="/images/timeline-logo.png" alt="Timeline" /></router-link>
      <section>
        <p onclick="window.location = '/my-career'">
          <router-link to="/my-career">My Career</router-link>
        </p>
        <p onclick="window.location = '/search'">
          <router-link to="/search">Search</router-link>
        </p>
        <p onclick="window.location = '/profile-library'">
          <router-link to="/profile-library">Profile Library</router-link>
        </p>
      </section>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
  nav { background-color: #b5b7bd; height: 4em; }
  img { display: inline-block; margin: 0.3em; height: 80%; }
  section { float: right; margin-right: 1em; }
  p { display: inline-block; padding: 1.2em; margin: 0; }
  p:hover { cursor: pointer; background-color: #abacb3; }
  a:hover { text-decoration: none; }
</style>
