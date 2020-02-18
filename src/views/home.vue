<template>
  <div class="flex flex-wrap min-h-screen max-h-screen">
    <div class="w-2/2 md:w-1/2 flex flex-wrap">
      <me class="h-auto" />
      <blogCard class="w-full">
        <div class="p-2"></div>
      </blogCard>
    </div>
    <div class="w-2/2 md:w-1/2 flex">
      <blogCard>
        <section v-if="posts && posts.length > 0">
          <div v-for="post in posts" :key="post.id" class="p-1 shadow-neu_in_nr m-sm rounded-xl">
            <postCard class="p-6">
              <h2 class="text-xl font-firacode font-semibold text-purple-600">{{post.title}}</h2>
              <div class="font-firacode w-full text-white">{{post.content}}</div>
              <span
                class="interna inline-block bg-gray-600 rounded-full px-3 py-1 text-xs text-white mt-4 font-firacode"
              >{{post.createdAt.toDate().getFullYear()}}-{{ post.createdAt.toDate().getMonth() }}-{{ post.createdAt.toDate().getDate() }}</span>
            </postCard>
          </div>
        </section>
        <h3 v-else>Empty</h3>
      </blogCard>
    </div>
  </div>
</template>

<script>
import me from "../components/me";
import blogCard from "../components/blog_card";
import postCard from "../components/post_card";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    me,
    blogCard,
    postCard
  },
  computed: mapState(["posts"]),
  beforeCreate() {
    this.$store.dispatch("bindPosts");
  }
};
</script>

<style scoped>
</style>
