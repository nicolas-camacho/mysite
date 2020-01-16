<template>
  <div class="flex flex-wrap">
    <div class="w-full w-2/2 md:w-1/2 my-px px-px flex flex-wrap">
      <me />
      <blogCard class="h-small w-full" />
    </div>
    <div class="w-full w-2/2 md:w-1/2 my-px px-px flex flex-wrap">
      <blogCard>
        <section v-if="posts && posts.length > 0">
          <div v-for="post in posts" :key="post.id" class="p-1 shadow-neu_in_nr m-sm rounded-xl">
            <postCard class="p-6">
              <h2 class="text-xl font-firacode font-semibold text-purple-600">{{post.title}}</h2>
              <div class="font-firacode w-full text-white">{{post.content}}</div>
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
