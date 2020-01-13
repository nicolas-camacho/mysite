import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/ck4yl98v3k8v801do596w1qbe/master'

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
})

Vue.use(VueApollo)

export default new VueApollo({
    defaultClient: apolloClient,
})