<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="(post, index) in posts" :key="index">
      <p>
        <span><b>{{ post.title }}</b></span><br/>
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService';

export default {
  name: 'posts',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data;
    },
  },
};
</script>
<!--<template lang="pug">-->
<!--.container-->
<!--.row-->
<!--.col-->
<!--h1-->
<!--| Posts-->
<!--h3-->
<!--| This file will list all the posts-->

<!--section.panel.panel-success( v-if="posts.length" )-->
<!--.panel-heading-->
<!--| list of posts-->
<!--table.table.table-striped-->
<!--tr-->
<!--th Title-->
<!--th Description-->
<!--th Action-->
<!--tr( v-for="(post, index) in posts", :key="post.title" )-->
<!--td {{ post.title }}-->
<!--td {{ post.description }}-->

<!--section.panel.panel-danger( v-else )-->
<!--p-->
<!--| There are no posts ... Lets add one now!-->
<!--div-->
<!--router-link( :to="{ name: 'NewPost' }" )-->
<!--| add new post-->
<!--</template>-->

<!--<script>-->
<!--import PostsService from '@/services/PostsService';-->

<!--export default {-->
<!--name: 'PostsPage',-->
<!--data() {-->
<!--return {-->
<!--posts: [],-->
<!--};-->
<!--},-->
<!--methods: {-->
<!--async getPosts() {-->
<!--const response = await PostsService.fetchPosts();-->
<!--this.posts = response.data.posts;-->
<!--},-->
<!--},-->
<!--mounted() {-->
<!--this.getPosts();-->
<!--},-->
<!--};-->
<!--</script>-->
