import Vue from 'vue'
import Vuex from 'vuex'
import { postsCollection } from './firebaseConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null
  },
  getters: {
    getPosts: state => {
      return state.posts
    }
  },
  actions: {
    setPosts: context => {
      context.commit('setPosts')
    }
  },
  mutations: {
    setPosts: state => {
      let posts = []

      postsCollection.orderBy('createdAt').onSnapshot((snapshot) => {
        posts = []
        snapshot.forEach((post) => {
          posts.push({
            id: post.id,
            title: post.data().title,
            content: post.data().content,
            createdAt: post.data().createdAt
          })
        })

        state.posts = posts
      })
    }
  }
})
