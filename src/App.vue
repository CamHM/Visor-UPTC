<template>
  <v-app>
    <v-content class="primary">
      <v-container fluid>
        <v-row>

        </v-row>
        <v-row>
          <v-col cols="7" class="secondary">
            <HelloWorld/>
          </v-col>
          <v-col cols="1" class="primary"></v-col>
          <v-col cols="4" class="secondary">
            <HelloWorld/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/CardContainer';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
