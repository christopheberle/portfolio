<template>
    <div>
        <PreviewItem v-for="item in itemList" :key="item" :title="item.title" :summary="item.summary" :image="item.image" :link="item.link" :details="item.details" :buttonLabel="item.buttonLabel"></PreviewItem>
    </div>
</template>

<script>
    import PreviewItem from "@/components/PreviewItem.vue"

    export default {
        components : { PreviewItem },
        props : ["itemList"]
    }
</script>

<style>

</style>