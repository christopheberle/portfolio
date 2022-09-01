<template>
  <div class="page-container">
    <ViewHeader title="Projects" subtitle="practice, Practice, PRACTICE" />
    <div class="page-content-container">
      <div style="display: flex; flex-direction: column;">
        <PreviewItem v-for="item in itemList" :key="item" :title="item.title" :summary="item.summary" :image="item.image" :link="item.link" :details="item.details" :programmingLanguages="item.programmingLanguages" :buttonLabel="item.buttonLabel"></PreviewItem>
      </div>
    </div>
  </div>
</template>

<script>
  import ViewHeader from "@/components/ViewHeader.vue"
  import PreviewItem from "@/components/PreviewItem.vue";
  import projectList from "@/assets/projects.json"

  export default {
      components: {
        ViewHeader,
        PreviewItem
      },
      data() {
        return {
          itemList: projectList
        }
      }
  }
</script>

<style>

</style>