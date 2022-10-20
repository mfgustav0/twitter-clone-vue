<template>
    <twitter-app>
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
    </twitter-app>
</template>

<script>
    import TwitterApp from '@/Layouts/TwitterApp.vue'

    export default {
        name: 'HomeView',
        components: {
            TwitterApp
        },
        data() {
            return {
                auth: true
            }
        }
    }
</script>
