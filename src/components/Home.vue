<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <p class="heading">Online Scoring System</p>
    </div>
    <p class="internal-router"><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
p.heading {
  color: #1453AD;
}
/* Style as needed */
</style>
