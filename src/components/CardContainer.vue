<template>
  <v-content class="secondary" style="border-radius: 5px; padding: 10px;">
    <p class="display-2 warning--text font-weight-thin">{{ title }}</p>
    <v-spacer></v-spacer>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="element in data"
          v-bind:key="element.id"
          xs="12" sm="12" md="6" lg="4"
        >
          <FacultyCard v-bind:faculty="element" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import FacultyCard from "./FacultyCard";

  export default {
    components: {FacultyCard},
    props: ['title', 'data'],
    methods: {function () {
      if(this.$apollo.loading) {
        this.value += 10
      }}
    },
  };
</script>
