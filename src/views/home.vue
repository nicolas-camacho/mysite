<template>
  <div class="flex flex-wrap">
    <div class="w-full w-2/2 md:w-1/2 my-1 px-1 flex flex-wrap">
      <me />
      <blogCard class="h-small" />
    </div>
    <div class="w-full w-2/2 md:w-1/2 my-1 px-1 flex flex-wrap">
      <blogCard>
        <section v-if="this.$store.getters.getPosts && this.$store.getters.getPosts.length > 0">
          <div v-for="post in this.$store.getters.getPosts" :key="post.id">
            <h3>{{post.title}}</h3>
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

export default {
  name: "home",
  beforeCreate() {
    this.$store.dispatch("setPosts");
  },
  data() {
    return {
      posts: "",
      errors: ""
    };
  },
  components: {
    me,
    blogCard
  }
};
</script>

<style scoped>
</style>
