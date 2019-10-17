import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/Home";
import Faculty from "../components/Faculty";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', name:'Home', component: Home},
        { path: '/faculty/:id', name: 'Faculty', component: Faculty},
    ]
})
