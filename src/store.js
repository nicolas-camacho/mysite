import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { postsCollection } from "./firebaseConfig";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
    bindPosts: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('posts', postsCollection)
    })
  }
})
