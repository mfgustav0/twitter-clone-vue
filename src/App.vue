<template>
    <div id="root" class="font-helvetica text-center">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    body {
        background: rgb(0 0 0);

        #root {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    }
</style>
