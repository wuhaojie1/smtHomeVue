<template>
    <div id="index">
        <nav-header></nav-header>
        <nav-main></nav-main>
    </div>
</template>

<script>
    import NavHeader from "../components/header";
    import NavMain from "../components/main.vue";
    export default {
        name: "index",
        components: {NavHeader,NavMain}
    }
</script>

<style scoped>

</style>