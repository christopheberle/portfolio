<template>
    <div class="preview-item-container">
        <div class="preview-item-image-container">
            <img v-if="image" :src="require(`@/assets/img/${image}`)"  class="preview-image"/>
            <img v-else src="@/assets/img/placeholder.png" class="preview-image"/>
        </div>
        <div class="preview-item-text-container">
            <h1 class="preview-header">{{title}}</h1>
            <div v-if="details" class="preview-details">{{details}}</div>
            <div v-if="programmingLanguages" class="programming-languages-container">
                    <div v-for="el in programmingLanguages" :key="el" style="margin-right: 2%;">
                        <font-awesome-icon :key="el" :icon="el.iconName"/>
                        <div style="display: inline; margin-left: 3px">{{el.langName}}</div>
                    </div>
                </div>
            <p class="preview-summary">{{ summary }}</p>
            <div v-if="link || routerLink" class="preview-button-container">
                <a v-if="link" :href="link">
                    <button>{{ buttonLabel ? buttonLabel : "Read More"}}</button>
                </a>
                <router-link v-if="routerLink" :to="routerLink" class="preview-button-container">
                    <button>{{ buttonLabel ? buttonLabel : "Read More"}}</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title : String,
        summary : String,
        image : String,
        link : String, 
        routerLink: String,
        details: String,
        programmingLanguages: Array,
        buttonLabel: String
    }
}
</script>

<style>

</style>