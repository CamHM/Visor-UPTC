import { ApolloClient } from 'apollo-client';
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from 'vue-apollo'
import Vue from 'vue';

const httpLink = createHttpLink({
    uri: 'https://ociteb.herokuapp.com/graphql'
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
   link: httpLink,
    cache: cache
});


Vue.use(VueApollo);

export default new VueApollo({
    defaultClient: apolloClient,
})
