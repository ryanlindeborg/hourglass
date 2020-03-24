<template>
  <div class="search">
    <section class="splash">
      <h1>Check out our library of industry leader profiles</h1>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Search for career inspiration"
                 id="industryLeader" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Shazam!</button>
      </form>
    </section>
  </div>
</template>

<script>
</script>

<style>
  div.search h1 { width: 80%; margin: 0 auto; padding: 1em 0; }
  div.search section { background: url("../../public/images/laptop.jpg")
  no-repeat center bottom; background-size: cover; height: 50vh; }
  div.search input { max-width: 80%; margin: 0 auto; }
  div.search button { display: block; margin: 0 auto; }
</style>
