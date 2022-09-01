<template>
  <div class="view-header-flex-container">
    <div class="view-header-text-container" id="view-header-text-container">
        <h1 class="view-header" id="view-header-h1">{{ title ? title : "Title goes here"}}</h1>
        <div class="view-header-hr"></div>
        <h2 class="view-header" id="view-header-h2">{{ subtitle ? subtitle : "Subtitle goes here"}}</h2>
    </div>
  </div>
</template>

<script>
export default {
    props: ["title", "subtitle"]
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("view-header-h1").className = "view-header-scrolled";
    document.getElementById("view-header-h2").className = "view-header-scrolled";
    document.getElementById("view-header-text-container").className = "view-header-text-container-scrolled";
  }
  else {
    document.getElementById("view-header-h1").className = "view-header";
    document.getElementById("view-header-h2").className = "view-header";

    document.getElementById("view-header-text-container").className = "view-header-text-container";
  }
}
</script>

<style>

</style>