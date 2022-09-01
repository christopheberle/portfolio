<template>
  <div class="page-container">
    <ViewHeader title="About" subtitle="Me, Myself & I" />
    <div class="page-content-container" style="flex-direction: row; justify-content: space-between;">
      <div class="about-image-container">
        <img src="@/assets/img/profile-placeholder.jpg" style="max-width: 100%; height: auto; width: auto;" alt="">
      </div>
      <div class="about-text-container">
        <h1>Christoph Eberle</h1>
        <h2>Physicist, BSc.</h2>
        <div style="text-align: justify; text-justify: inter-word; max-width: 100%;">
          <p>I am currently a master's student in physics in the Information Field Theory group of <a href="https://wwwmpa.mpa-garching.mpg.de/~ensslin/">Torsten Enßlin</a> at the <a href="https://www.mpa-garching.mpg.de">Max Planck Institute for Astrophysics</a> in Munich, Germany. Starting from November 2022 I will be a Ph.D candidate in physics as part of <a href="https://www.pulse.physik.uni-muenchen.de/about_us/people/group-leader/andreas_doepp/index.html">Andreas Döpp</a>'s research group focussing on dimensionality reduction and latent space optimisation.</p>
          <p>My research interests include Bayesian optimisation, the interpretation of latent spaces, dimensionality reduction techniques, probabilistic (Bayesian) and generative ML models.</p>
          <p>My other interests include graphic and web design, front-end development, data visualisation as well as learning foreign languages such as Japanese and in the future hopefully Mandarin Chinese too.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ViewHeader from "@/components/ViewHeader.vue"
  
  export default {
      components: {
          ViewHeader
      }
  }
</script>

<style>

</style>