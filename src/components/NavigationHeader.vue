<template>
    <header>
        <router-link class="logo-name" to="/">Christoph Eberle</router-link>
        <nav id="hamnav">
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            <div id="hamitems">
                <a onclick="document.getElementById('hamburger').checked = false" v-for="route in routes" :key="route">
                    <router-link v-if="route.name !== ('home' || '')" :to="route.path">{{ route.name }}</router-link>
                </a> 
            </div>
        </nav>
    </header> 
</template>

<script>
    export default {
        data() {
            return {
                routes: [
                    {
                        name: "Projects",
                        path: "/projects"
                    },
                    {
                        name: "Blog",
                        path: "/blog"
                    },
                    {
                        name: "CV",
                        path: "/cv"
                    },
                    {
                        name: "About",
                        path: "/about"
                    },
                ]
            }
        },
        methods: {
            burgerClicked(event) {
                console.log(event.target.value)
            }
        }
    }
</script>
<style>

</style>