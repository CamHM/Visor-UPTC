<template>
  <v-app>
    <router-view />
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/faculty'>Faculty</router-link>
    </nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
