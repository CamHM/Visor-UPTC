<template>
  <v-app>
    <v-content class="primary" align="center" style="padding: 0 20px 40px 20px">
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <div class="white" style="border-radius: 35px; height: 50px">
              <img src="https://res.cloudinary.com/dqcyu2ism/image/upload/v1571295449/acre_color_jpg_dfgg1t.jpg">
            </div>
          </v-col>
          <v-col cols="5"></v-col>
          <v-col cols="4">
            <p class="display-1 font-weight-light white--text">Visor OCITEB</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <CardContainer title="Facultades" v-bind:data="faculties"/>
          </v-col>
          <v-col cols="5">
            <CardContainer title="Seccionales" v-bind:data="Sectional"/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CardContainer from './components/CardContainer';

export default {
  name: 'App',
  components: {
    CardContainer: CardContainer,
  },
  data: () => ({
    faculties: [
      {
        id: 1,
        name: 'Facultad de Ciencias de la Salud',
        abbreviation: 'FCS'
      },
      {
        id: 2,
        name: 'Facultad de Ciencias Agropecuarias',
        abbreviation: 'FCA'
      },
      {
        id: 3,
        name: 'Facultad de Ingeniería',
        abbreviation: 'FI'
      },
      {
        id: 4,
        name: 'Facultad de Derecho y Ciencias Sociales',
        abbreviation: 'FDC'
      },
      {
        id: 5,
        name: 'Facultad de Ciencias Económicas y Administrativas',
        abbreviation: 'FCEA'
      },
      {
        id: 6,
        name: 'FESAD',
        abbreviation: 'FESAD'
      },
    ],
    Sectional: [
      {
        id: 20,
        name: 'Duitama',
        abbreviation: 'D'
      },
      {
        id: 21,
        name: 'Sogamoso',
        abbreviation: 'S'
      },
      {
        id: 22,
        name: 'Chiquinquirá',
        abbreviation: 'CH'
      },
      {
        id: 23,
        name: 'Aguazul',
        abbreviation: 'AZ'
      },
    ],
  }),
};
</script>
