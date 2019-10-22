import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        faculty: {},
        mainCard: {},
        cardList: []
    },
    actions: {
        changeFaculty({ commit }, faculty) {
            commit('changeFaculty', faculty)
        },
        changeMainCard({ commit }, code) {
            commit('changeMainCard', code)
        },
        setMainCard({ commit }, cardInfo) {
            commit('setMainCard', cardInfo)
        },
        addCardList({ commit }, cardInfo) {
            commit('addCardList', cardInfo)
        },
        resetList({ commit }) {
            commit('resetList')
        },
        removeFirstCard({commit}) {
            commit('removeFirstCard')
        },
        setFirst({commit}) {
            commit('setFirst')
        }
    },
    mutations: {
        changeFaculty(state, faculty) {
            state.faculty = faculty
        },
        changeMainCard(state, code) {
            state.cardList = state.cardList.push(state.mainCard);
            state.mainCard = state.cardList.find(c => c.info.code === code);
            state.cardList = state.cardList.filter(c => c.info.code !== code);
        },
        setMainCard(state, cardInfo) {
            state.mainCard = cardInfo
        },
        addCardList(state, cardInfo) {
            state.cardList.push(cardInfo)
        },
        resetList(state) {
            state.cardList = [];
        },
        removeFirstCard(state) {
            state.cardList.shift()
        },
        setFirst(state) {
            state.mainCard = state.cardList[0]
        }
    },
    getters: {
        faculty: state => state.faculty,
        mainCard: state => state.mainCard,
        cardList: state => state.cardList
    },
});
