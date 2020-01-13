<template>
  <div class="flex flex-wrap">
    <div class="w-full w-2/2 md:w-1/2 my-1 px-1 flex flex-wrap">
      <me />
      <blogCard class="h-small" />
    </div>
    <div class="w-full w-2/2 md:w-1/2 my-1 px-1 flex flex-wrap">
      <blogCard>
        <section v-if="posts">
          <div v-for="post in posts" :key="post.id" class="container bg-red-900">
            <h3>{{post.title}}</h3>
          </div>
        </section>
        <h2 v-else>
          Loading...
        </h2>
      </blogCard>
    </div>
  </div>
</template>

<script>
import me from "../components/me";
import blogCard from "../components/blog_card";
import gql from 'graphql-tag'


const POSTS_PER_PAGE = 2;

const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      createdAt
    }
  }
`;

export default {
  name: "home",
  components: {
    me,
    blogCard
  },
  data: () => ({
    loading: 0,
    posts: null,
    postCount: null,
  }),
  apollo: {
    $loadingKey: 'loading',
    posts: {
      query: posts,
      variables: {
        skip: 0,
        first: POSTS_PER_PAGE,
      }
    },
    postCount: {
      query: gql`{ postsesConnection { aggregate { count } } }`,
      update: ({ postsConnection }) => postsConnection.aggregate.count,
    },
  },
  methods: {
    loadMorePosts() {
      this.$apollo.queries.posts.fetchMore({
        variables: {
          skip: this.posts.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            posts: [...previousResult.posts, ...fetchMoreResult.posts],
          });
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
