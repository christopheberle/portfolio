<template>
    <div class="page-container"> 
        <ViewHeader title="Blog" subtitle="Thinking out loud..."/>
        <div class="page-content-container">
            <div style="width: 100%; display: flex; flex-direction: column;">
                <PreviewItem v-for="item in blogPosts" :key="item" :title="item.title" :summary="item.summary" :image="item.image" :link="item.link" :routerLink="item.routerLink" :details="item.details" :programmingLanguages="item.programmingLanguages" :buttonLabel="item.buttonLabel"></PreviewItem>
            </div>
        </div>
    </div>
</template>

<script>
    import PreviewItem from "@/components/PreviewItem.vue";
    import blogPostsJson from "@/assets/blogPosts.json"

    export default {
        components: {
            PreviewItem
        },
        data() {
            return {
                blogPosts : blogPostsJson
            }
        }
    }
</script>

<style>

</style>