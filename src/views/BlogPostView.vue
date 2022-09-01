<template>
    <ViewHeader title="Blog" subtitle="Thinking out loud" />
    <div class="page-container"> 
        <div v-if="failed" class="error">something went wrong...</div>
        <div style="text-align: left" v-else v-html="markdownToHtml(this.postMarkdown)"></div> 
    </div>
</template>

<script>
    import { marked } from "marked"
    import ViewHeader from "@/components/ViewHeader.vue";

    export default {
        components: {ViewHeader},
        data() {
            return {
                postMarkdown: "test",
                failed: false
            }
        },
        props: ["postMdFile"],
        async created() {
            try {
                console.info("Attempting to load `@/assets/blog_posts/${this.$route.params.post}.md`")
                const response = await require(`@/assets/blog_posts/${this.$route.params.post}.md`);
                this.postMarkdown = response.default;
                console.log(this.postMarkdown)
            }
            catch (error) {
                this.failed = true;
                console.log(error)
            }
            
        },
        methods: {
            markdownToHtml(mdstring) {
                return marked(mdstring);
            }
        }
    }
</script>